<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import mapboxgl from 'mapbox-gl'
import addressMap from '@/assets/json/address.json'
import { resolveIconUrl } from '@/utils/parseKml.js'
import {
  shouldShowByIcon,
  shouldShowByPrice,
  isCoordInBounds,
} from '@/composables/useMarkerFilters.js'
import { favoriteId } from '@/composables/useFavorites.js'

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

// ----- 建立 marker（合併過的版本，含 fade-in） -----
const setMaker = () => {
  // 移除舊 marker
  for (let i = currentMarkers.value.length - 1; i >= 0; i--) {
    currentMarkers.value[i].remove()
  }
  currentMarkers.value = []

  if (!map.value) return
  const bounds = map.value.getBounds?.()

  for (const MapGroup of props.mapDataList) {
    for (const marker of MapGroup.features) {
      const id = favoriteId(marker.properties.name, marker.geometry.coordinates)
      const isFav = props.favoriteIds?.has?.(id)
      if (
        !isCoordInBounds(bounds, marker.geometry.coordinates) ||
        (props.onlyFavorites && !isFav) ||
        !shouldShowByIcon(
          marker.properties.icon,
          props.parkingTypeKeyArray,
          props.degreeOfFriendlinessKeyArray
        ) ||
        !shouldShowByPrice(
          marker.properties.priceInfo,
          marker.properties.priceArray,
          props.parkingPriceType,
          props.priceRangeMin,
          props.priceRangeMax
        )
      ) {
        continue
      }

      const el = document.createElement('div')
      el.className = 'marker'
      if (isFav) el.classList.add('is-fav')

      const tag = document.createElement('div')
      tag.className = 'tag'
      const img = document.createElement('div')
      img.className = 'img'
      if (marker.properties.icon) {
        img.style.backgroundImage = `url(${resolveIconUrl(marker.properties.icon)})`
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
        for (const key in addressMap) {
          if (
            marker.geometry.coordinates[0] == addressMap[key].geometry[0] &&
            marker.geometry.coordinates[1] == addressMap[key].geometry[1]
          ) {
            address = addressMap[key].address
            break
          }
        }

        emits('parkingInfo', {
          name: MapGroup.name,
          properties: marker.properties,
          geometry: marker.geometry.coordinates,
          address,
        })
      })

      const oneMarker = new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map.value)
      currentMarkers.value.push(oneMarker)
    }
  }

  // ----- 「共筆停車點」 markers (同官方樣式，薰衣草紫色底) -----
  for (const community of props.communityParkings || []) {
    const coord = community.coordinates
    if (!coord || coord[0] == null || coord[1] == null) continue
    if (!isCoordInBounds(bounds, coord)) continue

    const id = favoriteId(community.name, coord)
    const isFav = props.favoriteIds?.has?.(id)
    if (props.onlyFavorites && !isFav) continue

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
        center: coord,
        zoom: 17,
        speed: 1.5,
        curve: 1.5,
        essential: true,
      })
      emits('communityParkingClick', community)
    })

    const oneMarker = new mapboxgl.Marker(el).setLngLat(coord).addTo(map.value)
    currentMarkers.value.push(oneMarker)
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
onMounted(async () => {
  mapboxgl.accessToken = mapData.value.accessToken
  // Chrome 不允許「未經使用者互動」直接呼叫 geolocation；
  // 先檢查授權狀態,只有已 granted 才自動定位,否則直接用預設座標開地圖
  let canAutoLocate = false
  try {
    if ('permissions' in navigator) {
      const status = await navigator.permissions.query({ name: 'geolocation' })
      canAutoLocate = status.state === 'granted'
    }
  } catch {
    canAutoLocate = false
  }
  if (canAutoLocate && 'geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
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
