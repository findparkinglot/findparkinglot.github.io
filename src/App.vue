<script setup>
import { onMounted, ref, computed, watch } from 'vue'
import MapBox from './components/MapBox.vue'
import BaseModal from './components/BaseModal.vue'
import FabMenu from './components/FabMenu.vue'
import SettingsPanel from './components/SettingsPanel.vue'
import ParkingInfoPanel from './components/ParkingInfoPanel.vue'
import RouteSteps from './components/RouteSteps.vue'

import xml from '@/assets/MapData/My Maps/PackingMarkerList/doc.xml'
import { parseKml, resolveIconUrl } from '@/utils/parseKml.js'
import { storage } from '@/utils/storage.js'
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
  // 路線面板（stepsOpen）與路線規劃不互斥，另外處理
}

watch(menuActive, (v) => v && openOnly('menu'))
watch(infoActive, (v) => v && openOnly('info'))
watch(windowMessageOpen, (v) => v && openOnly('message'))
watch(windowMobileFAQOpen, (v) => v && openOnly('mobileFAQ'))
watch(windowFAQOpen, (v) => v && openOnly('faq'))
watch(windowHowToUseOpen, (v) => v && openOnly('howto'))
watch(windowShareOpen, (v) => v && openOnly('share'))

// ---------- 篩選器 ----------
const parkingType = ref('')
const degreeOfFriendliness = ref('')
const parkingPriceType = ref('')
const priceRangeMin = ref(0)
const priceRangeMax = ref(100)

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
  geometry: [null, null],
  address: '',
})

const onSetParkingInfo = (data) => {
  ParkingInfo.value = {
    parkingName: data.properties.name,
    parkingNameDes: data.properties.description,
    parkingType: data.name,
    parkingIcon: resolveIconUrl(data.properties.icon),
    geometry: data.geometry,
    address: data.address,
  }
  infoActive.value = true
}

// ---------- 路線規劃 ----------
const goToParkingPlaceData = ref(null)
const routeData = ref(null)

const goToParkingPlace = (geometry) => {
  goToParkingPlaceData.value = geometry
  infoActive.value = false
  routeData.value = null
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
  if (url) window.open(url, '_blank', 'noopener,noreferrer')
}

// ---------- 分享 ----------
const shareLinkHandler = (type) => {
  const url = 'https://findparkinglot.github.io/'
  let shareUrl = ''
  if (type === 'facebook') {
    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  } else if (type === 'line') {
    shareUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`
  } else if (type === 'twitter') {
    shareUrl = `https://twitter.com/share?url=${encodeURIComponent(url)}`
  }
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

// ---------- AdSense ----------
const loadAd = (id) => {
  const els = document.querySelectorAll(`.ad-id-${id}`)
  els.forEach((c) => {
    const ins = document.createElement('ins')
    ins.className = 'adsbygoogle'
    ins.style.display = 'block'
    ins.setAttribute('data-ad-client', 'ca-pub-6596839701234097')
    ins.setAttribute('data-ad-slot', id)
    ins.setAttribute('data-ad-format', 'auto')
    ins.setAttribute('data-full-width-responsive', 'true')
    c.appendChild(ins)
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {
      /* noop */
    }
  })
}

// ---------- 啟動 ----------
onMounted(() => {
  MapDataList.value = parseKml(xml)
  loadAd('5885589098')
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
</script>

<template>
  <!-- Logo / 標題 -->
  <div class="app-title">
    <button
      class="title-toggle"
      @click="menuActive = !menuActive"
      :aria-label="menuActive ? '收合設定' : '開啟設定'"
      :aria-expanded="menuActive"
    >
      <span class="material-icons-outlined">
        {{ menuActive ? 'close' : 'menu' }}
      </span>
    </button>
    <h1>重機能停哪?</h1>
  </div>

  <!-- 浮動選單（右下）；路線/資訊面板開啟時隱藏以避免遮擋 -->
  <FabMenu v-show="!stepsOpen && !infoActive" :items="fabItems" />

  <pre id="coordinates" class="coordinates"></pre>

  <!-- 地圖 -->
  <MapBox
    :parkingTypeKeyArray="parkingTypeKeys"
    :degreeOfFriendlinessKeyArray="degreeOfFriendlinessKeys"
    :mapDataList="MapDataList"
    :getLngLat="mapOptions.getLngLat"
    :mapStylesSelected="mapOptions.mapStylesSelected"
    :parkingPriceType="parkingPriceType"
    :priceRangeMin="priceRangeMin"
    :priceRangeMax="priceRangeMax"
    v-model:goToParkingPlaceData="goToParkingPlaceData"
    v-model:routeData="routeData"
    @parkingInfo="onSetParkingInfo"
  />

  <!-- 路線步驟 -->
  <RouteSteps
    :route-data="routeData"
    :active="stepsOpen"
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
    @close="infoActive = false"
    @route="goToParkingPlace(ParkingInfo.geometry)"
    @open-map="openInMap"
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
</style>
