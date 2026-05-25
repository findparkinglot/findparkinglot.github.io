<script setup>
import { onMounted, ref, computed, watch } from 'vue'
import MapBox from './components/MapBox.vue'
import BaseModal from './components/BaseModal.vue'
import FabMenu from './components/FabMenu.vue'
import SettingsPanel from './components/SettingsPanel.vue'
import ParkingInfoPanel from './components/ParkingInfoPanel.vue'
import RouteSteps from './components/RouteSteps.vue'
import SearchBar from './components/SearchBar.vue'
import CommunityParkingEditor from './components/CommunityParkingEditor.vue'

import xml from '@/assets/MapData/My Maps/PackingMarkerList/doc.xml'
import addressMap from '@/assets/json/address.json'
import { parseKml, resolveIconUrl } from '@/utils/parseKml.js'
import { storage } from '@/utils/storage.js'
import { useFavorites, favoriteId } from '@/composables/useFavorites.js'
import { useCommunityParkings } from '@/composables/useCommunityParkings.js'
import { useUserProfile } from '@/composables/useUserProfile.js'
import {
  useParkingOverrides,
  applyOverride,
} from '@/composables/useParkingOverrides.js'
import { isFirebaseConfigured } from '@/utils/firebase.js'
import { track } from '@/utils/analytics.js'
import {
  parkingTypeList,
  degreeOfFriendlinessList,
  mapStyleList,
} from '@/constants/parking.js'

// ---------- 裝置 / 環境偵測 ----------
const ua = navigator.userAgent
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)
const isApple = /iPhone|iPad|iPod/i.test(ua)
const isAndroid = /Android/i.test(ua)

// ---------- 資料 ----------
const MapDataList = ref([])

// ---------- 主題 / 地圖樣式 ----------
const initialStyle =
  mapStyleList.find((s) => s.name === storage.get('mapStyles'))?.value ||
  mapStyleList[0].value

const mapOptions = ref({
  getLngLat: false,
  mapStylesSelected: initialStyle,
})

const applyTheme = (styleValue) => {
  const s = mapStyleList.find((m) => m.value === styleValue)
  const isLight = s?.theme === 'light'
  document.body.classList.toggle('light-theme', isLight)
  document.body.classList.toggle('dark-theme', !isLight)
  if (s) storage.set('mapStyles', s.name)
}
applyTheme(mapOptions.value.mapStylesSelected)
watch(() => mapOptions.value.mapStylesSelected, applyTheme)

// ---------- Modal 狀態 ----------
const windowMessageOpen = ref(true)
const windowMobileFAQOpen = ref(false)
const windowFAQOpen = ref(false)
const windowHowToUseOpen = ref(false)
const windowShareOpen = ref(false)
const windowCommunityHelpOpen = ref(false)

// 每次開啟都顯示歡迎頁面
const closeMesBox = () => {
  windowMessageOpen.value = false
}

// ---------- 面板狀態 ----------
const menuActive = ref(false)
const infoActive = ref(false)
const stepsOpen = ref(false)

// ---------- 互斥：同一時間只顯示一個面板 / Modal ----------
const openOnly = (key) => {
  if (key !== 'menu') menuActive.value = false
  if (key !== 'info') infoActive.value = false
  if (key !== 'message') windowMessageOpen.value = false
  if (key !== 'mobileFAQ') windowMobileFAQOpen.value = false
  if (key !== 'faq') windowFAQOpen.value = false
  if (key !== 'howto') windowHowToUseOpen.value = false
  if (key !== 'share') windowShareOpen.value = false
  if (key !== 'communityHelp') windowCommunityHelpOpen.value = false
  // 路線面板（stepsOpen）與路線規劃不互斥，另外處理
  track('panel_open', { panel: key })
}

watch(menuActive, (v) => v && openOnly('menu'))
watch(infoActive, (v) => v && openOnly('info'))
watch(windowMessageOpen, (v) => v && openOnly('message'))
watch(windowMobileFAQOpen, (v) => v && openOnly('mobileFAQ'))
watch(windowFAQOpen, (v) => v && openOnly('faq'))
watch(windowHowToUseOpen, (v) => v && openOnly('howto'))
watch(windowShareOpen, (v) => v && openOnly('share'))
watch(windowCommunityHelpOpen, (v) => v && openOnly('communityHelp'))

// ---------- 篩選器（持久化到 localStorage.filters_v1） ----------
const FILTERS_STORAGE_KEY = 'filters_v1'
const savedFilters = storage.getJSON(FILTERS_STORAGE_KEY, {}) || {}
const parkingType = ref(typeof savedFilters.parkingType === 'string' ? savedFilters.parkingType : '')
const degreeOfFriendliness = ref(typeof savedFilters.degreeOfFriendliness === 'string' ? savedFilters.degreeOfFriendliness : '')
const parkingPriceType = ref(typeof savedFilters.parkingPriceType === 'string' ? savedFilters.parkingPriceType : '')
const priceRangeMin = ref(typeof savedFilters.priceRangeMin === 'number' ? savedFilters.priceRangeMin : 0)
const priceRangeMax = ref(typeof savedFilters.priceRangeMax === 'number' ? savedFilters.priceRangeMax : 100)

// ---------- 我的最愛 ----------
const { favorites, favoriteIdSet, isFavorite, toggleFavorite } = useFavorites()
const onlyFavorites = ref(savedFilters.onlyFavorites === true)

watch(
  [parkingType, degreeOfFriendliness, parkingPriceType, priceRangeMin, priceRangeMax, onlyFavorites],
  ([pt, df, ppt, prMin, prMax, fav]) => {
    storage.setJSON(FILTERS_STORAGE_KEY, {
      parkingType: pt,
      degreeOfFriendliness: df,
      parkingPriceType: ppt,
      priceRangeMin: prMin,
      priceRangeMax: prMax,
      onlyFavorites: fav,
    })
  }
)

// ---------- 路線交通方式（每次點路線規劃時重設為 driving） ----------
const routeProfile = ref('driving')

// ---------- 社群停車場 ----------
const { items: communityParkings, addParking, updateParking, deleteParking } =
  useCommunityParkings()
const { userId, nickname, isAdmin } = useUserProfile()
const mapBoxRef = ref(null)

// ---------- 官方停車點「覆寫層」 ----------
// 讓車友可以在不變動原始 KML 資料的前提下,對同一官方點提供「覆寫資訊」(如實際費率)。
// 顯示時若某個官方點存在覆寫,就以覆寫資料為主。
const { getOverride, getOverrideHistory, upsertOverride, resetOverride } =
  useParkingOverrides()

// 編輯器狀態
const editorOpen = ref(false)
const editorMode = ref('add') // 'add' | 'edit' | 'override'
const editorInitial = ref(null)
const editorSubmitting = ref(false)
const editorDefaultCoord = ref([121.5173399, 25.0475613])
// override 模式專用:是否已存在覆寫 (決定是否顯示「重設」按鈕)
const editorHasExistingOverride = ref(false)

// 編輯器內顯示的「修改紀錄」陣列 — 依目前 mode 自動從對應資料來源取得
const editorHistory = computed(() => {
  if (!editorOpen.value) return []
  if (editorMode.value === 'override') {
    if (!currentOriginal.value) return []
    return getOverrideHistory(
      currentOriginal.value.name,
      currentOriginal.value.geometry
    )
  }
  if (editorMode.value === 'edit' && editorInitial.value?.id) {
    const item = (communityParkings.value || []).find(
      (it) => it.id === editorInitial.value.id
    )
    return item?.history || []
  }
  return []
})
// 「選位置」模式：顯示十字線 + 頂部提示列
const addPickMode = ref(false)
// 目前查看中的社群項目
const currentCommunity = ref(null)

const openAddEditor = () => {
  if (!isFirebaseConfigured) {
    alert('「共筆停車點」功能尚未設定。請讓站方設定 Firebase 後再試。')
    return
  }
  // 先進入「選位置」模式，使用者確認後才開編輯器
  addPickMode.value = true
  track('community_add_start')
}

const confirmPickLocation = () => {
  const center = mapBoxRef.value?.getCenter?.() || [121.5173399, 25.0475613]
  editorDefaultCoord.value = center
  editorMode.value = 'add'
  editorInitial.value = null
  addPickMode.value = false
  editorOpen.value = true
}

const cancelPickLocation = () => {
  addPickMode.value = false
}

const openEditEditor = (community) => {
  editorDefaultCoord.value = community.coordinates
    ? [...community.coordinates]
    : mapBoxRef.value?.getCenter?.() || [121.5173399, 25.0475613]
  editorMode.value = 'edit'
  editorInitial.value = community
  editorOpen.value = true
}

const onCommunityParkingClick = (community) => {
  currentCommunity.value = community
  // 以 InfoPanel 顯示 (含「編輯」按鈕)
  onSetParkingInfo({
    name: '共筆停車點',
    properties: {
      name: community.name,
      description: community.description,
      icon: community.iconKey,
      priceInfo: community.priceInfo,
      priceArray: [],
    },
    geometry: community.coordinates,
    address: '',
  })
}

const onEditCurrentCommunity = () => {
  if (currentCommunity.value) {
    infoActive.value = false
    openEditEditor(currentCommunity.value)
  }
}

// ---------- 官方點覆寫:編輯 / 儲存 / 重設 ----------
const openOverrideEditor = () => {
  if (!isFirebaseConfigured) {
    alert('「修改官方停車點」功能尚未設定。請讓站方設定 Firebase 後再試。')
    return
  }
  if (!currentOriginal.value) return
  // 以「目前顯示資料」 (已合併覆寫) 作為編輯起始值
  const orig = currentOriginal.value
  const ov = currentOverride.value
  const initial = {
    id: null,
    // 名稱固定使用官方原名,override 模式下不可修改
    name: orig.name,
    description: ov?.description || orig.description,
    iconKey: ov?.iconKey || orig.iconKey,
    category: ov?.category || guessCategory(orig.iconKey),
    friendliness: ov?.friendliness || guessFriendliness(orig.iconKey),
    priceInfo: ov?.priceInfo || orig.priceInfo,
    coordinates: orig.geometry ? [...orig.geometry] : [...editorDefaultCoord.value],
  }
  editorDefaultCoord.value = initial.coordinates
  editorMode.value = 'override'
  editorInitial.value = initial
  editorHasExistingOverride.value = Boolean(ov)
  infoActive.value = false
  editorOpen.value = true
  track('override_edit_start', { name: orig.name })
}

// 由 icon 反查 category/friendliness,讓編輯器預設值與原 icon 一致
function guessCategory(iconKey) {
  if (!iconKey) return 'motorcycle'
  const hit = parkingTypeList.find(
    (p) => p.value && p.key.includes(iconKey)
  )
  return hit?.value || 'motorcycle'
}
function guessFriendliness(iconKey) {
  if (!iconKey) return 'friendly'
  const hit = degreeOfFriendlinessList.find(
    (p) => p.value && p.key.includes(iconKey)
  )
  return hit?.value || 'friendly'
}

const onOverrideSubmit = async (payload) => {
  if (!currentOriginal.value) return
  editorSubmitting.value = true
  try {
    const user = { id: userId, nickname: nickname.value }
    await upsertOverride(currentOriginal.value, payload, user)
    track('override_submit', { name: currentOriginal.value.name })
    // 重新以原始資料 + 最新覆寫套用並重開 InfoPanel
    const orig = currentOriginal.value
    editorOpen.value = false
    onSetParkingInfo({
      name: orig.parkingType,
      properties: {
        name: orig.name,
        description: orig.description,
        icon: orig.iconKey,
        priceInfo: orig.priceInfo,
        priceArray: [],
      },
      geometry: orig.geometry,
      address: ParkingInfo.value.address,
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[override] submit failed', err)
    alert('儲存失敗:' + (err?.message || err))
  } finally {
    editorSubmitting.value = false
  }
}

const onOverrideReset = async () => {
  if (!currentOriginal.value) return
  editorSubmitting.value = true
  try {
    const orig = currentOriginal.value
    const user = { id: userId, nickname: nickname.value }
    await resetOverride(orig.name, orig.geometry, user)
    track('override_reset', { name: orig.name })
    editorOpen.value = false
    onSetParkingInfo({
      name: orig.parkingType,
      properties: {
        name: orig.name,
        description: orig.description,
        icon: orig.iconKey,
        priceInfo: orig.priceInfo,
        priceArray: [],
      },
      geometry: orig.geometry,
      address: ParkingInfo.value.address,
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[override] reset failed', err)
    alert('重設失敗:' + (err?.message || err))
  } finally {
    editorSubmitting.value = false
  }
}

const onEditorSubmit = async (payload) => {
  editorSubmitting.value = true
  try {
    const user = { id: userId, nickname: nickname.value }
    if (editorMode.value === 'edit' && editorInitial.value?.id) {
      await updateParking(editorInitial.value.id, payload, user)
      track('community_edit_submit', { name: payload?.name })
    } else {
      await addParking(payload, user)
      track('community_add_submit', { name: payload?.name })
    }
    editorOpen.value = false
    currentCommunity.value = null
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[community] submit failed', err)
    alert('儲存失敗:' + (err?.message || err))
  } finally {
    editorSubmitting.value = false
  }
}

const onEditorDelete = async (id) => {
  editorSubmitting.value = true
  try {
    const user = { id: userId, nickname: nickname.value }
    await deleteParking(id, user)
    track('community_delete', { id })
    editorOpen.value = false
    currentCommunity.value = null
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[community] delete failed', err)
    alert('刪除失敗:' + (err?.message || err))
  } finally {
    editorSubmitting.value = false
  }
}

// ---------- 現在查看的是社群 marker 嗎？ ----------
const currentIsCommunity = computed(() => {
  if (!currentCommunity.value || !ParkingInfo.value.parkingName) return false
  // 只要名稱与座標同時匹配即視為同一點
  const cc = currentCommunity.value
  return (
    cc.name === ParkingInfo.value.parkingName &&
    Array.isArray(ParkingInfo.value.geometry) &&
    cc.coordinates?.[0] === ParkingInfo.value.geometry[0] &&
    cc.coordinates?.[1] === ParkingInfo.value.geometry[1]
  )
})

// 關閉 InfoPanel 時清除 currentCommunity
watch(infoActive, (v) => {
  if (!v) currentCommunity.value = null
})

// ---------- 搜尋聚焦座標 ----------
const searchFocusCoord = ref(null)

const parkingTypeKeys = computed(
  () => parkingTypeList.find((i) => i.value === parkingType.value)?.key || []
)
const degreeOfFriendlinessKeys = computed(
  () =>
    degreeOfFriendlinessList.find((i) => i.value === degreeOfFriendliness.value)
      ?.key || []
)

// ---------- 停車場詳情 ----------
const ParkingInfo = ref({
  parkingName: '',
  parkingNameDes: '',
  parkingType: '',
  parkingIcon: '',
  parkingIconKey: '',
  priceInfo: '',
  geometry: [null, null],
  address: '',
})

// 目前查看中的「官方點原始資料」與「覆寫資料」
// (為了達成「修改官方點」編輯 / 重設、以及顯示「車友修改資訊」標記)
const currentOriginal = ref(null) // { name, description, iconKey, priceInfo, geometry, parkingType }
const currentOverride = ref(null) // RTDB 覆寫物件

const currentParkingId = computed(() =>
  favoriteId(ParkingInfo.value.parkingName, ParkingInfo.value.geometry)
)
const currentIsFavorite = computed(() =>
  isFavorite(currentParkingId.value)
)

const onSetParkingInfo = (data) => {
  // 1. 先准備「官方原始資料」
  const originalIconKey = data.properties.icon
  const original = {
    name: data.properties.name,
    description: data.properties.description,
    iconKey: originalIconKey,
    priceInfo: data.properties.priceInfo || '',
    geometry: data.geometry,
    parkingType: data.name,
  }

  // 2. 如果是官方點 (非共筆) 且有覆寫,就套上去
  //    共筆點不需要覆寫 (本身就是可被編輯的)
  const isCommunityPoint = Boolean(
    currentCommunity.value &&
      currentCommunity.value.name === data.properties.name &&
      Array.isArray(data.geometry) &&
      currentCommunity.value.coordinates?.[0] === data.geometry[0] &&
      currentCommunity.value.coordinates?.[1] === data.geometry[1]
  )
  let override = null
  let display = original
  if (!isCommunityPoint) {
    override = getOverride(original.name, original.geometry)
    if (override) display = applyOverride(original, override)
  }
  currentOriginal.value = isCommunityPoint ? null : original
  currentOverride.value = override

  ParkingInfo.value = {
    parkingName: display.name,
    parkingNameDes: display.description,
    parkingType: original.parkingType,
    parkingIcon: resolveIconUrl(display.iconKey),
    parkingIconKey: display.iconKey,
    priceInfo: display.priceInfo || '',
    geometry: data.geometry,
    address: data.address,
  }
  infoActive.value = true
  track('parking_view', {
    parking_name: data.properties?.name,
    parking_type: data.name,
    icon: data.properties?.icon,
    overridden: Boolean(override),
  })
}

const onToggleFavorite = () => {
  if (!ParkingInfo.value.parkingName) return
  const willBeFav = !currentIsFavorite.value
  toggleFavorite({
    id: currentParkingId.value,
    name: ParkingInfo.value.parkingName,
    parkingType: ParkingInfo.value.parkingType,
    geometry: ParkingInfo.value.geometry,
    address: ParkingInfo.value.address,
    icon: ParkingInfo.value.parkingIconKey,
  })
  track(willBeFav ? 'favorite_add' : 'favorite_remove', {
    parking_name: ParkingInfo.value.parkingName,
    parking_type: ParkingInfo.value.parkingType,
  })
}

// ---------- 搜尋選取處理 ----------
const findAddress = (coord) => {
  for (const key in addressMap) {
    if (
      coord[0] == addressMap[key].geometry[0] &&
      coord[1] == addressMap[key].geometry[1]
    ) {
      return addressMap[key].address
    }
  }
  return ''
}

const onSearchSelect = (item) => {
  // 選中搜尋結果：充填資訊面板 × 讓地圖 flyTo
  onSetParkingInfo({
    name: item.groupName,
    properties: item.properties,
    geometry: item.geometry,
    address: findAddress(item.geometry),
  })
  searchFocusCoord.value = [...item.geometry]
  track('search_select', {
    parking_name: item.properties?.name,
    group: item.groupName,
  })
}

// ---------- 路線規劃 ----------
const goToParkingPlaceData = ref(null)
const routeData = ref(null)

const goToParkingPlace = (geometry) => {
  // 每次發起路線規劃，預設交通方式為汽機車
  routeProfile.value = 'driving'
  goToParkingPlaceData.value = geometry
  infoActive.value = false
  routeData.value = null
  track('route_start', {
    parking_name: ParkingInfo.value.parkingName,
    profile: 'driving',
  })
}
const cancelRoute = () => {
  goToParkingPlaceData.value = null
  stepsOpen.value = false
}

watch(routeData, (val) => {
  stepsOpen.value = val !== null
})

// ---------- 外開地圖 ----------
const openInMap = (type) => {
  const geometry = ParkingInfo.value.geometry
  let url = ''
  if (type === 'apple') {
    url = `https://maps.apple.com/?daddr=${geometry[1]},${geometry[0]}&dirflg=d&t=m`
  } else if (type === 'google') {
    url = `https://www.google.com/maps/dir/?api=1&destination=${geometry[1]},${geometry[0]}&travelmode=driving`
  }
  if (url) {
    track('open_external_map', {
      provider: type,
      parking_name: ParkingInfo.value.parkingName,
    })
    window.open(url, '_blank', 'noopener,noreferrer')
  }
}

// ---------- 分享 ----------
const shareLinkHandler = (type, urlOverride = null) => {
  const url = urlOverride || 'https://findparkinglot.github.io/'
  let shareUrl = ''
  if (type === 'facebook') {
    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  } else if (type === 'line') {
    shareUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`
  } else if (type === 'twitter') {
    shareUrl = `https://twitter.com/share?url=${encodeURIComponent(url)}`
  }
  track('share', { method: type, scope: urlOverride ? 'spot' : 'site' })
  if (type === 'link') {
    navigator.clipboard.writeText(url).then(
      () => alert('已複製連結'),
      () => alert('複製失敗')
    )
  } else {
    window.open(
      shareUrl,
      '',
      'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'
    )
  }
}

// ---------- 分享單一停車點 (URL query + Web Share API) ----------
const SITE_ORIGIN = 'https://findparkinglot.github.io/'

const buildSpotShareUrl = () => {
  const g = ParkingInfo.value.geometry
  if (!Array.isArray(g) || g[0] == null || g[1] == null) return ''
  const params = new URLSearchParams({
    lng: Number(g[0]).toFixed(6),
    lat: Number(g[1]).toFixed(6),
  })
  return `${SITE_ORIGIN}?${params.toString()}`
}

const shareCurrentSpot = () => {
  const url = buildSpotShareUrl()
  if (!url) return
  spotShareUrl.value = url
  spotShareName.value = ParkingInfo.value.parkingName || '停車點'
  windowSpotShareOpen.value = true
  track('share_spot_open', { name: spotShareName.value })
}

// 「分享停車點」 Modal 狀態
const windowSpotShareOpen = ref(false)
const spotShareUrl = ref('')
const spotShareName = ref('')

// 開啟資訊面板時把 URL 更新成可分享連結；關閉時清掉 query
const syncSpotQuery = () => {
  try {
    if (!infoActive.value) {
      if (window.location.search) {
        window.history.replaceState({}, '', window.location.pathname)
      }
      return
    }
    const url = buildSpotShareUrl()
    if (!url) return
    const qs = url.slice(url.indexOf('?'))
    window.history.replaceState({}, '', window.location.pathname + qs)
  } catch {
    /* history API 失敗就忽略 */
  }
}
watch([infoActive, ParkingInfo], syncSpotQuery, { deep: true })

// 進站若 URL 帶座標參數 → 嘗試開啟對應停車點
const pendingSpotQuery = ref(null)
const coordMatches = (a, b) => Math.abs(Number(a) - Number(b)) < 1e-5

const resolvePendingSpot = () => {
  const q = pendingSpotQuery.value
  if (!q) return
  const lng = Number(q.lng)
  const lat = Number(q.lat)
  if (!isFinite(lng) || !isFinite(lat)) {
    pendingSpotQuery.value = null
    return
  }
  // 1) 共筆優先 (資料可能變動，同座標的共筆點比較重要)
  const c = (communityParkings.value || []).find(
    (cc) =>
      cc.coordinates &&
      coordMatches(cc.coordinates[0], lng) &&
      coordMatches(cc.coordinates[1], lat)
  )
  if (c) {
    onCommunityParkingClick(c)
    searchFocusCoord.value = [lng, lat]
    pendingSpotQuery.value = null
    return
  }
  // 2) 靜態 KML
  for (const group of MapDataList.value || []) {
    for (const f of group.features || []) {
      const cc = f.geometry?.coordinates
      if (cc && coordMatches(cc[0], lng) && coordMatches(cc[1], lat)) {
        onSetParkingInfo({
          name: group.name,
          properties: f.properties,
          geometry: f.geometry.coordinates,
          address: '',
        })
        searchFocusCoord.value = [lng, lat]
        pendingSpotQuery.value = null
        return
      }
    }
  }
  // 3) 連源頭資料都未載入 → 等 watcher 試下一輪 (不清掉 pendingSpotQuery)
  // 並先 flyTo 到坐標讓使用者看到位置
  if (Array.isArray(MapDataList.value) && MapDataList.value.length > 0) {
    // KML 已載 但沒匹配 → 可能是共筆點 (Firebase 還未回) → flyTo 先帶過去
    searchFocusCoord.value = [lng, lat]
  }
}

const tryOpenFromUrl = () => {
  try {
    const params = new URLSearchParams(window.location.search)
    const lng = params.get('lng')
    const lat = params.get('lat')
    if (!lng || !lat) return
    pendingSpotQuery.value = { lng, lat }
    resolvePendingSpot()
  } catch {
    /* noop */
  }
}

// 共筆與 KML 任一資料抵達時重試 resolve
watch(communityParkings, resolvePendingSpot, { deep: false })
watch(MapDataList, resolvePendingSpot, { deep: false })

// ---------- 啟動 ----------
onMounted(() => {
  MapDataList.value = parseKml(xml)
  tryOpenFromUrl()
})

// ---------- FAB 選單項目 ----------
const fabItems = computed(() => [
  {
    key: 'share',
    icon: 'share',
    label: '分享',
    highlight: true,
    onClick: () => (windowShareOpen.value = true),
  },
  {
    key: 'howto',
    icon: 'help_outline',
    label: '怎麼用',
    onClick: () => (windowHowToUseOpen.value = true),
  },
  {
    key: 'faq',
    icon: 'map',
    label: '地圖怎麼看',
    onClick: () => (windowFAQOpen.value = true),
  },
  {
    key: 'mobile',
    icon: 'add_to_home_screen',
    label: '加到手機桌面',
    onClick: () => (windowMobileFAQOpen.value = true),
  },
])

// ---------- 左下社群 FAB 選單 ----------
const communityFabItems = computed(() => [
  {
    key: 'add',
    icon: 'add_location_alt',
    label: '新增停車位置',
    highlight: true,
    onClick: openAddEditor,
  },
  {
    key: 'help',
    icon: 'menu_book',
    label: '編輯教學',
    onClick: () => (windowCommunityHelpOpen.value = true),
  },
])
</script>

<template>
  <!-- Logo / 標題 -->
  <div class="app-title">
    <button
      v-if="!addPickMode"
      class="title-toggle"
      @click="menuActive = !menuActive"
      :aria-label="menuActive ? '收合設定' : '開啟設定'"
      :aria-expanded="menuActive"
    >
      <span class="material-icons-outlined">
        {{ menuActive ? 'close' : 'menu' }}
      </span>
    </button>
    <img v-else class="title-logo" src="/logo.png" alt="重機能停哪" />
    <h1>重機能停哪?</h1>
  </div>

  <!-- 浮動選單（右下）；路線/資訊面板開啟時隱藏以避免遮擋 -->
  <FabMenu v-show="!stepsOpen && !infoActive && !addPickMode" :items="fabItems" />

  <!-- 共筆停車點選單（左下） -->
  <FabMenu
    v-show="!stepsOpen && !infoActive && !addPickMode"
    :items="communityFabItems"
    placement="left"
    main-icon="add_location_alt"
    main-label="共筆停車點"
  />

  <!-- 搜尋列 -->
  <SearchBar
    v-show="!stepsOpen && !infoActive && !addPickMode"
    :map-data-list="MapDataList"
    @select="onSearchSelect"
  />

  <pre id="coordinates" class="coordinates"></pre>

  <!-- 地圖 -->
  <MapBox
    ref="mapBoxRef"
    :parkingTypeKeyArray="parkingTypeKeys"
    :degreeOfFriendlinessKeyArray="degreeOfFriendlinessKeys"
    :mapDataList="MapDataList"
    :getLngLat="mapOptions.getLngLat"
    :mapStylesSelected="mapOptions.mapStylesSelected"
    :parkingPriceType="parkingPriceType"
    :priceRangeMin="priceRangeMin"
    :priceRangeMax="priceRangeMax"
    :favorite-ids="favoriteIdSet"
    :only-favorites="onlyFavorites"
    :focus-coord="searchFocusCoord"
    :route-profile="routeProfile"
    :community-parkings="communityParkings"
    v-model:goToParkingPlaceData="goToParkingPlaceData"
    v-model:routeData="routeData"
    @parkingInfo="onSetParkingInfo"
    @communityParkingClick="onCommunityParkingClick"
  />

  <!-- 路線步驟 -->
  <RouteSteps
    :route-data="routeData"
    :active="stepsOpen"
    :profile="routeProfile"
    @update:profile="routeProfile = $event"
    @cancel="cancelRoute"
  />

  <!-- 設定面板 -->
  <SettingsPanel
    v-model:parkingType="parkingType"
    v-model:degreeOfFriendliness="degreeOfFriendliness"
    v-model:parkingPriceType="parkingPriceType"
    v-model:priceRangeMin="priceRangeMin"
    v-model:priceRangeMax="priceRangeMax"
    v-model:mapStyle="mapOptions.mapStylesSelected"
    v-model:active="menuActive"
    v-model:onlyFavorites="onlyFavorites"
    :favorites-count="favorites.length"
  />

  <!-- 停車場資訊 -->
  <ParkingInfoPanel
    v-show="!stepsOpen"
    :info="ParkingInfo"
    :active="infoActive"
    :is-mobile="isMobile"
    :is-apple="isApple"
    :is-android="isAndroid"
    :has-route="goToParkingPlaceData !== null"
    :is-favorite="currentIsFavorite"
    :is-community="currentIsCommunity"
    :community-meta="currentIsCommunity ? currentCommunity : null"
    :is-overridden="!currentIsCommunity && Boolean(currentOverride)"
    :override-meta="currentOverride"
    @close="infoActive = false"
    @route="goToParkingPlace(ParkingInfo.geometry)"
    @open-map="openInMap"
    @toggle-favorite="onToggleFavorite"
    @edit-community="onEditCurrentCommunity"
    @edit-override="openOverrideEditor"
    @share="shareCurrentSpot"
  />

  <!-- 地圖怎麼看 Modal -->
  <BaseModal v-model="windowFAQOpen" title="地圖怎麼看?" close-text="知道了" size="lg">
    <h4 class="modal-section-title">圖案代表甚麼格位</h4>
    <div class="legend-list">
      <div class="legend-row">
        <img src="@/assets/images/icon/icon-1.png" alt="" />
        汽車：汽車格(含未確認是否有重機格)
      </div>
      <div class="legend-row">
        <img src="@/assets/images/icon/icon-3.png" alt="" />
        重機(有人)：有設重機專用格
      </div>
      <div class="legend-row">
        <img src="@/assets/images/icon/icon-10.png" alt="" />
        機車(沒人)：機車格
      </div>
      <div class="legend-row">
        <img src="@/assets/images/icon/icon-16.png" alt="" />
        綠P：重機專用路邊停車格
      </div>
      <div class="legend-row">
        <img src="@/assets/images/icon/icon-17.png" alt="" />
        黃P：重機與汽車共享路邊停車格(黃P共享格不再更新)
      </div>
      <div class="legend-row">
        <img src="@/assets/images/icon/icon-18.png" alt="" />
        紫P：時段性汽機車共用停車格
      </div>
      <div class="legend-row">
        <img src="@/assets/images/icon/icon-19.png" alt="" />
        紅X：停都不給停
      </div>
    </div>

    <h4 class="modal-section-title">顏色代表入場方式</h4>
    <div class="legend-list">
      <div class="legend-row">
        <img src="@/assets/images/icon/icon-1.png" alt="" />
        <img src="@/assets/images/icon/icon-3.png" alt="" />
        <img src="@/assets/images/icon/icon-10.png" alt="" />
        綠色最友善：有後牌辨析
      </div>
      <div class="legend-row">
        <img src="@/assets/images/icon/icon-6.png" alt="" />
        <img src="@/assets/images/icon/icon-9.png" alt="" />
        <img src="@/assets/images/icon/icon-13.png" alt="" />
        藍色最傳統：悠遊卡 / 按鈕取票
      </div>
      <div class="legend-row">
        <img src="@/assets/images/icon/icon-2.png" alt="" />
        <img src="@/assets/images/icon/icon-5.png" alt="" />
        <img src="@/assets/images/icon/icon-11.png" alt="" />
        紅色最靠北：請管理員協助 / 倒退嚕前牌辨析
      </div>
      <div class="legend-row">
        <img src="@/assets/images/icon/icon-7.png" alt="" />
        <img src="@/assets/images/icon/icon-4.png" alt="" />
        灰色未確定：有可能是上述任何情況，停到請回報
      </div>
    </div>

    <h4 class="modal-section-title">名稱前有價錢</h4>
    <div class="legend-list">
      <div class="legend-row">
        <img src="@/assets/images/icon/icon-3.png" alt="" />
        (30/h)三張里地下停車場
      </div>
      <div class="legend-row">
        <div class="legend-text">
          ・數字：金額，時段費率複雜會以最高收費標示<br />
          ・d/h：d 為計次，h 為計時<br />
          ・Free 代表免費
        </div>
      </div>
    </div>
  </BaseModal>

  <!-- 分享 Modal -->
  <BaseModal v-model="windowShareOpen" title="分享給朋友" size="sm">
    <div class="share-grid">
      <button class="share-btn" @click="shareLinkHandler('facebook')" aria-label="Facebook">
        <img src="@/assets/images/icon/001-facebook.png" alt="" />
        <span>Facebook</span>
      </button>
      <button class="share-btn" @click="shareLinkHandler('line')" aria-label="LINE">
        <img src="@/assets/images/icon/002-line.png" alt="" />
        <span>LINE</span>
      </button>
      <button class="share-btn" @click="shareLinkHandler('twitter')" aria-label="Twitter">
        <img src="@/assets/images/icon/003-twitter.png" alt="" />
        <span>Twitter</span>
      </button>
      <button class="share-btn" @click="shareLinkHandler('link')" aria-label="複製連結">
        <img src="@/assets/images/icon/004-link.png" alt="" />
        <span>複製連結</span>
      </button>
    </div>
  </BaseModal>

  <!-- 分享單一停車點 Modal -->
  <BaseModal v-model="windowSpotShareOpen" :title="`分享：${spotShareName}`" size="sm">
    <p class="modal-hint" style="word-break:break-all">{{ spotShareUrl }}</p>
    <div class="share-grid">
      <button class="share-btn" @click="shareLinkHandler('facebook', spotShareUrl)" aria-label="Facebook">
        <img src="@/assets/images/icon/001-facebook.png" alt="" />
        <span>Facebook</span>
      </button>
      <button class="share-btn" @click="shareLinkHandler('line', spotShareUrl)" aria-label="LINE">
        <img src="@/assets/images/icon/002-line.png" alt="" />
        <span>LINE</span>
      </button>
      <button class="share-btn" @click="shareLinkHandler('twitter', spotShareUrl)" aria-label="Twitter">
        <img src="@/assets/images/icon/003-twitter.png" alt="" />
        <span>Twitter</span>
      </button>
      <button class="share-btn" @click="shareLinkHandler('link', spotShareUrl)" aria-label="複製連結">
        <img src="@/assets/images/icon/004-link.png" alt="" />
        <span>複製連結</span>
      </button>
    </div>
  </BaseModal>

  <!-- 怎麼用 Modal -->
  <BaseModal v-model="windowHowToUseOpen" title="地圖怎麼用?" close-text="知道了" size="lg">
    <h4 class="modal-section-title">1. 介面說明</h4>
    <img class="full-img" src="@/assets/images/FAQ1.jpg" alt="介面說明" />
    <h4 class="modal-section-title">2. 操作說明</h4>
    <img class="full-img" src="@/assets/images/FAQ2.jpg" alt="操作說明" />
    <h4 class="modal-section-title">3. 選單</h4>
    <img class="full-img" src="@/assets/images/FAQ3.jpg" alt="選單" />
  </BaseModal>

  <!-- 加入桌面 Modal -->
  <BaseModal v-model="windowMobileFAQOpen" title="如何加入手機桌面?" close-text="知道了" size="lg">
    <p class="modal-hint">以下以 iOS 為範例</p>
    <h4 class="modal-section-title">1. 使用 Safari 開啟網站並點擊下方分享按鈕</h4>
    <img class="full-img" src="@/assets/images/ios_01.jpg" alt="" />
    <h4 class="modal-section-title">2. 加入主畫面</h4>
    <img class="full-img" src="@/assets/images/ios_02.jpg" alt="" />
    <h4 class="modal-section-title">3. 儲存</h4>
    <img class="full-img" src="@/assets/images/ios_03.jpg" alt="" />
    <h4 class="modal-section-title">4. 即可在桌面開啟並無瀏覽器網址列</h4>
    <img class="full-img" src="@/assets/images/ios_04.jpg" alt="" />
  </BaseModal>

  <!-- 歡迎訊息 -->
  <BaseModal v-model="windowMessageOpen" title="嗨！歡迎使用 重機能停哪?" close-text="開始使用">
    <div class="welcome-logo-wrap">
      <img class="welcome-logo" src="/logo.png" alt="重機能停哪" />
    </div>

    <div class="welcome-badge">✨ 全新介面上線</div>

    <p class="welcome-text">
      這是一個提供重機停車資訊的地圖，你可以依據「友善程度」「停車格類型」「收費範圍」尋找合適的停車場，並一鍵開啟 Google 或 Apple Map 導航。
    </p>

    <div class="whatsnew-card">
      <div class="whatsnew-title">
        <span class="material-icons-outlined">auto_awesome</span>
        本次新功能
      </div>
      <ul class="whatsnew-list">
        <li>
          <span class="material-icons-outlined">star</span>
          <span><strong>我的最愛</strong> 
            <br>
            可以將喜歡的停車場加入我的最愛</span>
        </li>
        <li>
          <span class="material-icons-outlined">search</span>
          <span><strong>地點搜尋</strong> 
            <br>
            可以搜尋指定的停車地點</span>
        </li>
        <li>
          <span class="material-icons-outlined">edit_location_alt</span>
          <span><strong>共筆停車點</strong> 
            <br>
            可自由新增、編輯, 大家一起分享停車地點</span>
        </li>
        <li>
          <span class="material-icons-outlined">edit_note</span>
          <span><strong>官方點異議 / 補充</strong>
            <br>
            點開任一官方停車點 → 「異議 / 補充」, 可在不改動原始資料的前提下, 補上實際費率、更正分類或加註說明, 全車友共享</span>
        </li>
      </ul>
    </div>

    <p class="welcome-text">
      資料取源於
      <a href="https://linktr.ee/hueythegentry" target="_blank" rel="noopener" class="link"
        >大重停車記事</a
      >，如有停車場相關問題請至該頁面填寫回報表單。
    </p>
    <p class="welcome-text">
      此地圖免費提供車友使用，資料不定期更新；若發生無法使用情況，請至
      <a href="https://forms.gle/iJCyfqVtpL35WtZM7" target="_blank" rel="noopener" class="link"
        >錯誤資訊回報</a
      >，也歡迎
      <a href="https://buymeacoffee.com/jamestim923" target="_blank" rel="noopener" class="link"
        >請我喝杯咖啡 ☕️</a
      >讓我有動力繼續更新。
    </p>
    <p class="welcome-text right">— by 爽爽</p>
    <template #footer>
      <button class="btn btn-primary" @click="closeMesBox">開始使用</button>
    </template>
  </BaseModal>

  <!-- 共筆停車點編輯器 -->
  <CommunityParkingEditor
    v-model:open="editorOpen"
    :mode="editorMode"
    :initial="editorInitial"
    :default-coord="editorDefaultCoord"
    :nickname="nickname"
    :is-owner="true"
    :is-admin="isAdmin"
    :submitting="editorSubmitting"
    :has-existing-override="editorHasExistingOverride"
    :history="editorHistory"
    @update:nickname="nickname = $event"
    @submit="editorMode === 'override' ? onOverrideSubmit($event) : onEditorSubmit($event)"
    @delete="onEditorDelete"
    @reset="onOverrideReset"
  />

  <!-- 「新增位置」選點模式：畫面中心十字線 + 頂部提示列 -->
  <div v-if="addPickMode" class="pick-crosshair" aria-hidden="true">
    <span class="material-icons-outlined dot">gps_fixed</span>
  </div>
  <div v-if="addPickMode" class="pick-banner">
    <span class="pick-banner-text">
      <span class="material-icons-outlined">touch_app</span>
      拖動地圖，將十字線對準目標位置
    </span>
    <div class="pick-banner-actions">
      <button class="btn btn-outline btn-sm" @click="cancelPickLocation">取消</button>
      <button class="btn btn-primary btn-sm" @click="confirmPickLocation">
        <span class="material-icons-outlined">check</span>
        使用此位置
      </button>
    </div>
  </div>

  <!-- 共筆停車點說明 Modal -->
  <BaseModal v-model="windowCommunityHelpOpen" title="共筆停車點說明" close-text="我知道了" size="lg">
    <p class="welcome-text">
      <strong style="color: var(--primary)">這是一個公開共享的「共筆停車點」區。</strong>
      除了官方收錄的「大重停車記事」資料外,任何人都可以新增、修改、補充停車位置——不需要註冊、不需要審核。
    </p>

    <h4 class="modal-section-title">如何新增停車位置</h4>
    <ol class="welcome-text" style="padding-left: 22px; line-height: 1.9">
      <li>點左下角的「共筆停車點」按鈕,再點「新增停車位置」</li>
      <li>畫面中心會出現青色十字游標,拖動地圖將游標對準目標位置</li>
      <li>按頂部「使用此位置」,填寫名稱、類別、友善程度、收費等資料</li>
      <li>按「新增」即完成(座標已自動記錄,圖示會依類別自動套用)</li>
    </ol>

    <h4 class="modal-section-title">如何編輯他人新增的位置</h4>
    <ol class="welcome-text" style="padding-left: 22px; line-height: 1.9">
      <li>地圖上「薰衣草紫色底」的標記即為使用者新增的「共筆停車點」</li>
      <li>點擊該標記,在資訊面板按「編輯」</li>
      <li>修改後按「儲存修改」</li>
    </ol>

    <h4 class="modal-section-title">注意事項</h4>
    <ul class="welcome-text" style="padding-left: 22px; line-height: 1.9">
      <li>請確認資訊正確,避免造成他人困擾</li>
      <li>不要新增不雅、惡意或無關內容</li>
      <li>暱稱可選填,留空將顯示為「匿名#xxx-xxx」</li>
      <li>站方保留必要時清空所有「共筆停車點」資料的權利</li>
    </ul>
  </BaseModal>
</template>

<style scoped>
.app-title {
  position: fixed;
  z-index: 100;
  top: 14px;
  left: 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px 6px 6px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 999px;
  box-shadow: var(--shadow-md);
}
.app-title h1 {
  font-size: 15px;
  color: var(--primary);
  margin: 0;
  font-weight: 700;
  letter-spacing: 0.5px;
}
.title-toggle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 0;
  background: var(--primary);
  color: var(--primary-contrast);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, background 0.2s;
}
.title-toggle:hover {
  transform: rotate(90deg);
}
.title-toggle.is-invisible {
  visibility: hidden;
}
.title-logo {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}
.title-toggle .material-icons-outlined {
  font-size: 18px;
}

/* Modal 共用元素 */
.modal-section-title {
  color: var(--primary);
  margin: 16px 0 8px;
  font-size: 0.95rem;
}
.modal-section-title:first-child {
  margin-top: 0;
}
.modal-hint {
  color: var(--muted);
  margin: 0 0 12px;
  font-size: 0.85rem;
}
.legend-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.legend-row {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.88rem;
  color: var(--text);
}
.legend-row img {
  width: 28px;
  height: 28px;
  object-fit: cover;
  border-radius: 50%;
}
.legend-text {
  line-height: 1.6;
  font-size: 0.85rem;
}
.full-img {
  width: 100%;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
}

/* 分享 */
.share-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  padding: 12px 0;
}
.share-btn {
  background: transparent;
  border: 0;
  color: var(--text);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 8px 0;
  border-radius: var(--radius-md);
  transition: background 0.15s;
}
.share-btn:hover {
  background: var(--surface-2);
}
.share-btn img {
  width: 44px;
  height: 44px;
  object-fit: cover;
  background: #fff;
  border-radius: 12px;
  border: 2px solid var(--primary);
}
.share-btn span {
  font-size: 0.72rem;
  color: var(--muted);
}

/* 歡迎 */
.welcome-logo-wrap {
  display: flex;
  justify-content: center;
  margin: 0 0 12px;
}
.welcome-logo {
  width: 96px;
  height: 96px;
  border-radius: 24px;
  object-fit: cover;
  box-shadow: 0 4px 16px rgba(46, 231, 214, 0.25);
  border: 2px solid var(--primary);
}
.welcome-badge {
  display: block;
  margin: 0 auto 14px;
  padding: 4px 12px;
  background: var(--primary-soft, rgba(46, 231, 214, 0.15));
  color: var(--primary);
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  width: fit-content;
  text-align: center;
}
.whatsnew-card {
  margin: 12px 0 14px;
  padding: 12px 14px;
  background: var(--primary-soft, rgba(46, 231, 214, 0.10));
  border: 1px solid rgba(46, 231, 214, 0.35);
  border-radius: var(--radius-md);
}
.whatsnew-title {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--primary);
  font-weight: 700;
  font-size: 0.92rem;
  margin-bottom: 8px;
}
.whatsnew-title .material-icons-outlined {
  font-size: 18px;
}
.whatsnew-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.whatsnew-list li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.85rem;
  line-height: 1.55;
  color: var(--text);
}
.whatsnew-list li .material-icons-outlined {
  font-size: 18px;
  color: var(--primary);
  margin-top: 1px;
  flex-shrink: 0;
}
.whatsnew-list strong {
  color: var(--primary);
  font-weight: 700;
}
.welcome-text {
  margin: 0 0 10px;
  color: var(--text);
  font-size: 0.92rem;
  line-height: 1.7;
  text-align: justify;
}
.welcome-text.right {
  text-align: right;
  color: var(--muted);
  font-size: 0.85rem;
}
.link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
}
.link:hover {
  text-decoration: underline;
}

/* =================== 新增位置：中心十字 + 頂部提示列 =================== */
.pick-crosshair {
  position: fixed;
  inset: 0;
  z-index: 800;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pick-crosshair .dot {
  font-size: 36px;
  color: #2ee7d6;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 8px rgba(46, 231, 214, 0.5));
  animation: pick-pulse 1.4s ease-in-out infinite;
}
@keyframes pick-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.15); opacity: 0.85; }
}
.pick-banner {
  position: fixed;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 900;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: calc(100% - 28px);
  flex-wrap: wrap;
  justify-content: center;
}
.pick-banner-text {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--text);
  font-size: 0.88rem;
}
.pick-banner-text .material-icons-outlined {
  font-size: 18px;
  color: var(--primary);
}
.pick-banner-actions {
  display: inline-flex;
  gap: 6px;
}
.pick-banner-actions .material-icons-outlined {
  font-size: 16px;
}
@media (max-width: 480px) {
  .pick-banner {
    top: 60px; /* 避開左上角標題 */
    flex-direction: column;
    gap: 8px;
  }
}
</style>
