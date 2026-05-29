<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import mapboxgl from 'mapbox-gl'
// 隱藏 src/assets/json/address.json 查表;目前主要依賴 KML 來源的資料
import { resolveIconUrl } from '@/utils/parseKml.js'
import {
  shouldShowByIcon,
  shouldShowByPrice,
  isCoordInBounds,
} from '@/composables/useMarkerFilters.js'
import { favoriteId } from '@/composables/useFavorites.js'
import { overrideKey } from '@/composables/useParkingOverrides.js'

const props = defineProps({
  parkingTypeKeyArray: Array,
  degreeOfFriendlinessKeyArray: Array,
  mapDataList: Array,
  getLngLat: Boolean,
  mapStylesSelected: String,
  parkingPriceType: String,
  priceRangeMin: Number,
  priceRangeMax: Number,
  goToParkingPlaceData: Object,
  routeData: Object,
  favoriteIds: { type: Object, default: () => new Set() },
  overrideKeys: { type: Object, default: () => new Set() },
  overrides: { type: Object, default: () => ({}) },
  onlyFavorites: { type: Boolean, default: false },
  focusCoord: { type: Array, default: null },
  routeProfile: { type: String, default: 'driving' },
  communityParkings: { type: Array, default: () => [] },
})
const emits = defineEmits([
  'parkingInfo',
  'communityParkingClick',
  'update:goToParkingPlaceData',
  'update:routeData',
])

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN

if (!MAPBOX_TOKEN) {
  // eslint-disable-next-line no-console
  console.error(
    '[MapBox] 找不到 VITE_MAPBOX_TOKEN，請在 .env.local 中設定後重新啟動 dev server。'
  )
}

const map = ref(null)
const mapData = ref({
  accessToken: MAPBOX_TOKEN,
  bounds: [
    [119.3620389067818, 21.83282743468497],
    [122.07013958372167, 25.34391086143183],
  ],
  center: [121.5173399, 25.0475613],
  zoom: 14,
  userCoordinates: [null, null],
})

const lngLatMaker = ref(null)
const currentMarkers = ref([])

// Cluster 設定
// 當 zoom >= 此值，全部顯示原本 PIN，完全不叢集
// (S2 資料密度提升後，把門檻往下調，讓使用者在較低縮放就能看到實際停車點)
const CLUSTER_ZOOM_THRESHOLD = 16
// 叢集像素網格大小（越大叢集越粗），單一格內的點會被合併
// 依目前 zoom 動態調整：縮得越小 → 網格越大 → 更多點被合併，避免遠視角顯示過多 marker 造成 lag
// zoom >= 15  : 60px （接近原本密度）
// zoom 13~15  : 60 ~ 120px
// zoom 11~13  : 120 ~ 200px
// zoom <= 11  : 240px （大範圍直接粗略聚合）
const getClusterCellPx = (zoom) => {
  if (zoom >= 15) return 60
  if (zoom >= 13) return 60 + (15 - zoom) * 30   // 13→120, 14→90
  if (zoom >= 11) return 120 + (13 - zoom) * 60  // 11→240, 12→180
  return 240
}

// 確認座標為有效的 [lng, lat]
const isValidCoord = (c) =>
  Array.isArray(c) &&
  c.length >= 2 &&
  Number.isFinite(Number(c[0])) &&
  Number.isFinite(Number(c[1]))

// 建立官方 marker 的 DOM 元素（含 click handler）
// effectiveIcon: 若車友覆寫了 iconKey,使用覆寫後的圖示,讓地圖與 InfoPanel 一致
const createOfficialMarkerEl = (MapGroup, marker, isFav, isOverridden, effectiveIcon) => {
  const el = document.createElement('div')
  el.className = 'marker'
  if (isOverridden) el.classList.add('is-override')
  if (isFav) el.classList.add('is-fav')

  const tag = document.createElement('div')
  tag.className = 'tag'
  const img = document.createElement('div')
  img.className = 'img'
  const iconKey = effectiveIcon || marker.properties.icon
  if (iconKey) {
    img.style.backgroundImage = `url(${resolveIconUrl(iconKey)})`
    img.style.backgroundSize = 'cover'
    img.style.backgroundPosition = 'center center'
  }
  el.appendChild(tag)
  el.appendChild(img)

  el.addEventListener('click', () => {
    map.value.flyTo({
      center: marker.geometry.coordinates,
      zoom: 17,
      bearing: 0,
      speed: 1.5,
      curve: 1.5,
      easing: (t) => t,
      essential: true,
    })

    let address = ''
    // address.json 查表已隱藏;如未來要重新啟用,在此補回查表邏輯即可

    emits('parkingInfo', {
      name: MapGroup.name,
      properties: marker.properties,
      geometry: marker.geometry.coordinates,
      address,
    })
  })
  return el
}

// 建立共筆 marker 的 DOM 元素
const createCommunityMarkerEl = (community, isFav) => {
  const el = document.createElement('div')
  el.className = 'marker is-community'
  if (isFav) el.classList.add('is-fav')

  const tag = document.createElement('div')
  tag.className = 'tag'
  const img = document.createElement('div')
  img.className = 'img'
  if (community.iconKey) {
    img.style.backgroundImage = `url(${resolveIconUrl(community.iconKey)})`
    img.style.backgroundSize = 'cover'
    img.style.backgroundPosition = 'center center'
  }
  el.appendChild(tag)
  el.appendChild(img)

  el.addEventListener('click', () => {
    map.value.flyTo({
      center: community.coordinates,
      zoom: 17,
      speed: 1.5,
      curve: 1.5,
      essential: true,
    })
    emits('communityParkingClick', community)
  })
  return el
}

// 建立 cluster 數字圈：尺寸依 log(count) 連續放大
const CLUSTER_MIN_SIZE = 34
const CLUSTER_MAX_SIZE = 84
const createClusterEl = (count) => {
  const el = document.createElement('div')
  el.className = 'marker-cluster'
  // count = 2 → 約 min，count = 500 → 約 max，介於兩者間連續變化
  const t = Math.min(1, Math.log2(Math.max(2, count)) / Math.log2(500))
  const size = Math.round(
    CLUSTER_MIN_SIZE + (CLUSTER_MAX_SIZE - CLUSTER_MIN_SIZE) * t
  )
  // 字級也跟著縮放
  const fontSize = Math.round(12 + 10 * t)
  el.style.width = `${size}px`
  el.style.height = `${size}px`
  el.style.lineHeight = `${size}px`
  el.style.fontSize = `${fontSize}px`
  el.textContent = String(count)
  return el
}

// ----- 建立 marker（含 cluster） -----
const setMaker = () => {
  // 移除舊 marker
  for (let i = currentMarkers.value.length - 1; i >= 0; i--) {
    currentMarkers.value[i].remove()
  }
  currentMarkers.value = []

  if (!map.value) return
  const bounds = map.value.getBounds?.()

  // 1. 收集所有可見點（官方 + 共筆），統一資料結構
  const points = []
  for (const MapGroup of props.mapDataList) {
    for (const marker of MapGroup.features) {
      const coord = marker.geometry.coordinates
      if (!isValidCoord(coord)) continue
      const id = favoriteId(marker.properties.name, coord)
      const isFav = props.favoriteIds?.has?.(id)
      const ovKey = overrideKey(marker.properties.name, coord)
      const isOverridden = ovKey ? props.overrideKeys?.has?.(ovKey) : false
      // 若官方點已被車友覆寫且覆寫中包含價格，篩選並顯示都改用覆寫價格
      const override = isOverridden ? props.overrides?.[ovKey] : null
      const overridePriceInfo =
        typeof override?.priceInfo === 'string' && override.priceInfo.trim() !== ''
          ? override.priceInfo.trim()
          : ''
      const effectivePriceInfo = overridePriceInfo || marker.properties.priceInfo
      const effectivePriceArray = overridePriceInfo
        ? overridePriceInfo.split('|')
        : marker.properties.priceArray
      // 覆寫後的圖示 (若有) —— 同時作為篩選依據與 marker 視覺
      const effectiveIcon =
        (typeof override?.iconKey === 'string' && override.iconKey.trim() !== ''
          ? override.iconKey.trim()
          : '') || marker.properties.icon
      if (
        !isCoordInBounds(bounds, coord) ||
        (props.onlyFavorites && !isFav) ||
        !shouldShowByIcon(
          effectiveIcon,
          props.parkingTypeKeyArray,
          props.degreeOfFriendlinessKeyArray
        ) ||
        !shouldShowByPrice(
          effectivePriceInfo,
          effectivePriceArray,
          props.parkingPriceType,
          props.priceRangeMin,
          props.priceRangeMax
        )
      ) {
        continue
      }
      points.push({
        coord: [Number(coord[0]), Number(coord[1])],
        createEl: () => createOfficialMarkerEl(MapGroup, marker, isFav, isOverridden, effectiveIcon),
      })
    }
  }
  for (const community of props.communityParkings || []) {
    const coord = community.coordinates
    if (!isValidCoord(coord)) continue
    if (!isCoordInBounds(bounds, coord)) continue
    const id = favoriteId(community.name, coord)
    const isFav = props.favoriteIds?.has?.(id)
    if (props.onlyFavorites && !isFav) continue
    // 共筆停車點同樣套用分類 / 友善程度 / 價格篩選
    if (
      !shouldShowByIcon(
        community.iconKey,
        props.parkingTypeKeyArray,
        props.degreeOfFriendlinessKeyArray
      )
    ) {
      continue
    }
    const priceInfo = community.priceInfo || ''
    const priceArray = priceInfo ? priceInfo.split('|') : []
    if (
      !shouldShowByPrice(
        priceInfo,
        priceArray,
        props.parkingPriceType,
        props.priceRangeMin,
        props.priceRangeMax
      )
    ) {
      continue
    }
    points.push({
      coord: [Number(coord[0]), Number(coord[1])],
      createEl: () => createCommunityMarkerEl(community, isFav),
    })
  }

  const zoom = map.value.getZoom?.() ?? 0

  // 2. 縮放足夠大時，全部以原 PIN 樣式顯示
  if (zoom >= CLUSTER_ZOOM_THRESHOLD) {
    for (const p of points) {
      const m = new mapboxgl.Marker(p.createEl())
        .setLngLat(p.coord)
        .addTo(map.value)
      currentMarkers.value.push(m)
    }
    return
  }

  // 3. 像素網格叢集：同格內 >= 2 個點顯示為 cluster 圈
  const cellPx = getClusterCellPx(zoom)
  const cells = new Map()
  for (const p of points) {
    const px = map.value.project(p.coord)
    const cx = Math.floor(px.x / cellPx)
    const cy = Math.floor(px.y / cellPx)
    const key = `${cx}:${cy}`
    let cell = cells.get(key)
    if (!cell) {
      cell = { points: [], sumLng: 0, sumLat: 0 }
      cells.set(key, cell)
    }
    cell.points.push(p)
    cell.sumLng += p.coord[0]
    cell.sumLat += p.coord[1]
  }

  for (const cell of cells.values()) {
    if (cell.points.length === 1) {
      const p = cell.points[0]
      const m = new mapboxgl.Marker(p.createEl())
        .setLngLat(p.coord)
        .addTo(map.value)
      currentMarkers.value.push(m)
    } else {
      const center = [
        cell.sumLng / cell.points.length,
        cell.sumLat / cell.points.length,
      ]
      const el = createClusterEl(cell.points.length)
      el.addEventListener('click', () => {
        const nextZoom = Math.min((map.value.getZoom?.() ?? 0) + 2, 17)
        map.value.flyTo({
          center,
          zoom: nextZoom,
          speed: 1.5,
          curve: 1.5,
          essential: true,
        })
      })
      const m = new mapboxgl.Marker(el).setLngLat(center).addTo(map.value)
      currentMarkers.value.push(m)
    }
  }
}

// ----- 合併過的 marker refresh（debounce + idle，避免拖動時掃代 setMaker 阻塞主執行緒） -----
let refreshTimeoutId = null
let refreshIdleId = null
const cancelPendingRefresh = () => {
  if (refreshTimeoutId != null) {
    clearTimeout(refreshTimeoutId)
    refreshTimeoutId = null
  }
  if (refreshIdleId != null) {
    if (typeof cancelIdleCallback === 'function') cancelIdleCallback(refreshIdleId)
    refreshIdleId = null
  }
}
const refreshMarkers = () => {
  cancelPendingRefresh()
  refreshTimeoutId = setTimeout(() => {
    refreshTimeoutId = null
    const runRefresh = () => {
      refreshIdleId = null
      if (props.goToParkingPlaceData == null) setMaker()
    }
    if (typeof requestIdleCallback === 'function') {
      refreshIdleId = requestIdleCallback(runRefresh, { timeout: 250 })
    } else {
      runRefresh()
    }
  }, 80)
}

const hideLoading = () => {
  const el = document.getElementById('loading-cover')
  if (!el) return
  el.classList.add('active')
  setTimeout(() => el.remove(), 600)
}

const setMakerInit = () => {
  map.value.on('dragend', refreshMarkers)
  map.value.on('zoomend', refreshMarkers)
  setMaker()
  hideLoading()
  // 若 App 在 map 建立前已設定 focusCoord (例：分享連結進站)，這時補一次 flyTo
  map.value.once('load', () => {
    const fc = props.focusCoord
    if (Array.isArray(fc) && fc[0] != null && fc[1] != null) {
      map.value.flyTo({
        center: [Number(fc[0]), Number(fc[1])],
        zoom: 17,
        bearing: 0,
        speed: 1.5,
        curve: 1.5,
        essential: true,
      })
    }
  })
}

const setMap = () => {
  map.value = new mapboxgl.Map({
    container: 'map',
    style: props.mapStylesSelected,
    center: mapData.value.center,
    zoom: 16,
    trackResize: true,
    maxBounds: mapData.value.bounds,
  })

  setMakerInit()

  map.value.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: { enableHighAccuracy: true },
      trackUserLocation: true,
      showUserHeading: true,
    })
  )

  map.value.on('geolocate', (e) => {
    map.value.easeTo({
      bearing: e.coords.heading,
      duration: 1000,
      offset: [0, 0],
    })
  })
}

const successCallback = (position) => {
  const { longitude, latitude } = position.coords
  const inBounds =
    longitude >= mapData.value.bounds[0][0] &&
    longitude <= mapData.value.bounds[1][0] &&
    latitude >= mapData.value.bounds[0][1] &&
    latitude <= mapData.value.bounds[1][1]

  if (inBounds) {
    mapData.value.userCoordinates = [longitude, latitude]
    mapData.value.center = [longitude, latitude]
  } else {
    mapData.value.center = [121.5173399, 25.0475613]
  }
  setMap()
}

const errorCallback = () => {
  setMap()
}

const onDragEnd = () => {
  const coordinates = document.getElementById('coordinates')
  const lngLat = lngLatMaker.value.getLngLat()
  coordinates.style.display = 'block'
  coordinates.innerHTML = `[Longitude, Latitude]<br />[${lngLat.lng}, ${lngLat.lat}]`
}

const setLngLatMaker = () => {
  lngLatMaker.value = new mapboxgl.Marker({
    draggable: true,
    color: '#2ee7d6',
  })
    .setLngLat(map.value.getCenter())
    .addTo(map.value)

  onDragEnd()
  lngLatMaker.value.on('dragend', onDragEnd)
}

// ----- 路線規劃 -----
async function getRoute(start, end) {
  if (!map.value.getLayer('point')) {
    map.value.addLayer({
      id: 'point',
      type: 'circle',
      source: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {},
              geometry: { type: 'Point', coordinates: start },
            },
          ],
        },
      },
      paint: { 'circle-radius': 10, 'circle-color': '#2ee7d6' },
    })
  }

  const query = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/${props.routeProfile || 'driving'}/${start[0]},${start[1]};${end[0]},${end[1]}?alternatives=false&language=zh-Hant&overview=full&steps=true&exclude=ferry&geometries=geojson&access_token=${mapData.value.accessToken}`,
    { method: 'GET' }
  )
  const json = await query.json()
  const data = json.routes[0]
  const geojson = {
    type: 'Feature',
    properties: {},
    geometry: { type: 'LineString', coordinates: data.geometry.coordinates },
  }

  emits('update:routeData', data)

  if (map.value.getSource('route')) {
    map.value.getSource('route').setData(geojson)
  } else {
    map.value.addLayer({
      id: 'route',
      type: 'line',
      source: { type: 'geojson', data: geojson },
      layout: { 'line-join': 'round', 'line-cap': 'round' },
      paint: {
        'line-color': '#2ee7d6',
        'line-width': 5,
        'line-opacity': 0.75,
      },
    })
  }
}

const getUserLocation = (target) => {
  if (mapData.value.userCoordinates[0] !== null) {
    if (map.value.getSource('point')) {
      map.value.removeLayer('point')
      map.value.removeSource('point')
    }

    for (let i = currentMarkers.value.length - 1; i >= 0; i--) {
      const ll = currentMarkers.value[i].getLngLat()
      if (ll.lng != target[0] && ll.lat != target[1]) {
        currentMarkers.value[i].remove()
      }
    }

    const bounds = [
      [mapData.value.userCoordinates[0], mapData.value.userCoordinates[1]],
      [target[0], target[1]],
    ]
    map.value.fitBounds(bounds, {
      padding: { top: 100, bottom: 100, left: 100, right: 100 },
    })

    getRoute(mapData.value.userCoordinates, target)
  } else if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
  }
}

const removeRoutes = () => {
  if (map.value?.getSource('route')) {
    map.value.removeLayer('route')
    map.value.removeSource('route')
  }
  if (map.value?.getSource('point')) {
    map.value.removeLayer('point')
    map.value.removeSource('point')
  }
  setMaker()
  emits('update:goToParkingPlaceData', null)
}

// ----- Lifecycle -----
onMounted(() => {
  mapboxgl.accessToken = mapData.value.accessToken
  // 進站直接請求 GPS;第一次會跳權限提示,之後已授權則自動定位到使用者位置
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
      enableHighAccuracy: false,
      timeout: 8000,
      maximumAge: 60000,
    })
  } else {
    setMap()
  }
})

onBeforeUnmount(() => {
  cancelPendingRefresh()
})

// ----- Watchers（合併 5 個 watch 為單一 refresh） -----
watch(
  [
    () => props.parkingTypeKeyArray,
    () => props.degreeOfFriendlinessKeyArray,
    () => props.priceRangeMin,
    () => props.priceRangeMax,
    () => props.parkingPriceType,
    () => props.onlyFavorites,
    () => props.favoriteIds,
    () => props.communityParkings,
  ],
  () => refreshMarkers()
)

watch(
  () => props.focusCoord,
  (val) => {
    if (!val || !map.value) return
    map.value.flyTo({
      center: val,
      zoom: 17,
      bearing: 0,
      speed: 1.5,
      curve: 1.5,
      essential: true,
    })
  }
)

watch(
  () => props.routeProfile,
  () => {
    // 重新規劃路線使用新的交通方式
    if (
      props.goToParkingPlaceData !== null &&
      mapData.value.userCoordinates[0] !== null
    ) {
      getRoute(mapData.value.userCoordinates, props.goToParkingPlaceData)
    }
  }
)

watch(
  () => props.goToParkingPlaceData,
  (newVal) => {
    if (newVal !== null) {
      getUserLocation(newVal)
    } else {
      removeRoutes()
    }
  }
)

watch(
  () => props.mapStylesSelected,
  (newVal, oldVal) => {
    if (oldVal !== newVal && map.value) map.value.setStyle(newVal)
  }
)

watch(
  () => props.getLngLat,
  () => {
    if (lngLatMaker.value !== null) {
      lngLatMaker.value.remove()
      const coordinates = document.getElementById('coordinates')
      if (coordinates) coordinates.style.display = 'none'
    }
    if (props.getLngLat === true) setLngLatMaker()
  }
)

// 提供給父元件使用 (如：嵌入欄位初始值)
defineExpose({
  getCenter: () => {
    if (!map.value) return [...mapData.value.center]
    const c = map.value.getCenter()
    return [c.lng, c.lat]
  },
  flyTo: (coord, zoom = 17) => {
    if (!map.value || !coord) return
    map.value.flyTo({ center: coord, zoom, essential: true })
  },
})
</script>

<template>
  <div id="map"></div>
</template>

<style scoped>
#map {
  width: 100%;
  height: 100dvh;
}
</style>
