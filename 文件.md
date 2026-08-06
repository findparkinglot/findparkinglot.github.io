# 重機能停哪? 專案文件

文件更新日：2026-08-06  
專案版本：2.3.0  
地圖資料更新：260805

## 1. 專案概述

「重機能停哪?」是一個提供台灣重型機車停車資訊的純前端地圖服務。使用者可以透過地圖查看官方整理的停車點、車友共筆新增的停車點，以及車友對官方點補充或修正後的資訊。

專案以 Vue 3、Vite 與 Mapbox GL JS 建置，部署於 GitHub Pages。官方停車資料主要來自 Alan 大重停車記事 Google My Maps 匯出的 KML/KMZ；共筆停車點與官方點覆寫資料則儲存在 Firebase Realtime Database。

主要用途：

- 查詢重機可停放的停車場、路邊格位、友善店家與禁停區域。
- 依格位類型、友善程度、收費方式與價格區間篩選。
- 收藏常用停車點，並可只顯示我的最愛。
- 搜尋官方與共筆停車點。
- 查看停車點資訊、分享單一停車點、開啟 Google Maps / Apple Maps 導航。
- 讓車友新增共筆停車點，或補充官方停車點資訊。

## 2. 技術架構

| 類別 | 使用內容 |
|---|---|
| 前端框架 | Vue 3.4，Composition API，`<script setup>` |
| 建置工具 | Vite 5 |
| 地圖引擎 | Mapbox GL JS 3 |
| 雲端資料 | Firebase Realtime Database |
| 樣式 | 原生 CSS、CSS variables、Sass、Material Icons |
| PWA | Web App Manifest、自寫 Service Worker |
| 分析 | Google Analytics gtag |
| 部署 | GitHub Actions build 後部署到 `gh-pages` |

專案是單頁應用，主要入口為：

- `index.html`：SEO、OG、GA、PWA manifest、loading 畫面。
- `src/main.js`：掛載 Vue App，production 註冊 Service Worker。
- `src/App.vue`：整體狀態、資料載入、面板互斥、分享、搜尋、共筆與覆寫流程。
- `src/components/MapBox.vue`：Mapbox 地圖、marker 渲染、cluster、定位與路線規劃。

## 3. 目錄說明

```text
.
├─ .github/workflows/
│  ├─ deploy.yml          # build 並部署到 gh-pages
│  └─ update-kml.yml      # 排程更新 Alan My Maps KML
├─ public/
│  ├─ manifest.json       # PWA manifest
│  ├─ serviceWorker.js    # PWA cache strategy
│  ├─ logo*.png           # app icon
│  └─ ogimage.png         # Open Graph image
├─ scripts/
│  └─ update-kml.mjs      # 下載 KMZ、解壓、更新 doc.xml 與資料日期
├─ src/
│  ├─ assets/
│  │  ├─ MapData/         # Google My Maps 匯出原始資料
│  │  ├─ data/            # KML 備份/分類資料
│  │  ├─ json/            # JSON 資料與 address 查表
│  │  └─ images/          # FAQ、安裝教學、分享 icon
│  ├─ components/         # UI 元件
│  ├─ composables/        # 狀態與業務邏輯
│  ├─ constants/          # 分類、主題、資料更新日
│  ├─ utils/              # Firebase、KML parser、analytics、storage
│  ├─ App.vue
│  ├─ main.js
│  └─ style.css
├─ package.json
├─ vite.config.js
├─ README.md
└─ FEATURES.md
```

## 4. 核心功能

### 4.1 地圖與停車點顯示

地圖由 `MapBox.vue` 建立，預設範圍限制在台灣本島附近，初始中心為台北車站。進站時會嘗試取得使用者定位；若定位成功且座標位於地圖允許範圍內，會以使用者位置為中心，否則退回預設中心。

停車點使用 HTML DOM marker 顯示，不是 Mapbox symbol layer。為了避免低縮放時一次產生過多 DOM，地圖只渲染目前 viewport 內的 marker，並在縮放低於 16 時使用像素網格 cluster：

- `zoom >= 16`：顯示實際停車點 marker。
- `zoom < 16`：同格內多個點合併為數字 cluster。
- 點擊 cluster 會飛到 cluster 中心並放大 2 級，最多到 zoom 17。
- marker refresh 以 80ms debounce 搭配 `requestIdleCallback` 降低拖曳與縮放時的主執行緒壓力。

marker 樣式：

| 狀態 | 視覺 |
|---|---|
| 官方點 | 依圖示顯示分類與友善程度 |
| 已被車友覆寫的官方點 | 亮藍底 |
| 共筆停車點 | 薰衣草紫底 |
| 我的最愛 | 黃色外框與標籤 |
| cluster | 主色圓形數字圈 |

### 4.2 篩選

設定面板由 `SettingsPanel.vue` 提供，篩選邏輯在 `useMarkerFilters.js`。

可篩選項目：

- 顯示資料來源：官方、修改、共筆。
- 停車類型：汽車格、重機格、機車格、綠星、友善店家、綠/灰/藍/紫 P、紅 X、未知。
- 友善程度：友善、普通、不友善、未確定。
- 收費：全部、免費、計時 `/h`、計日 `/d`、不限時計次 `/次`。
- 價格區間：0 到 300 元，step 10。
- 我的最愛：只顯示已收藏停車點。

篩選狀態會寫入 `localStorage.filters_v1`，重新整理後會自動還原。

### 4.3 搜尋

搜尋邏輯位於 `useParkingSearch.js`，搜尋欄位包含名稱與描述。

目前搜尋範圍：

- 官方 KML 停車點。
- Firebase 共筆停車點。

搜尋結果會依簡單權重排序：名稱命中優先，命中位置越前分數越高。共筆點權重略低於官方點，避免同名時蓋過官方資料。

### 4.4 停車點資訊面板

停車點資訊由 `ParkingInfoPanel.vue` 顯示。使用者點擊 marker 後會：

- 地圖 `flyTo` 該點，縮放到 zoom 17。
- 開啟停車資訊面板。
- 顯示名稱、描述、座標、分類、資料來源、收費、共筆/覆寫狀態。
- 可加入或移除我的最愛。
- 可分享單一停車點連結。
- 可開啟 Google Maps / Apple Maps。
- 可從目前位置規劃路線。
- 官方點可進入「異議 / 補充」流程。
- 共筆點可進入編輯流程。

開啟資訊面板時，網址會帶上 `?lng=...&lat=...`。使用者分享該連結後，其他人開啟會自動嘗試匹配共筆點，再匹配官方點；若找不到對應資料，仍會飛到該座標。

### 4.5 路線規劃

路線由 Mapbox Directions API 取得，支援：

- driving
- cycling
- walking

路線參數包含：

- `language=zh-Hant`
- `overview=full`
- `steps=true`
- `exclude=ferry`
- `geometries=geojson`

路線顯示於 `RouteSteps.vue`，包含時間、距離與逐步導航文字。每次從停車資訊面板開始路線規劃時，交通方式會重設為 driving。

### 4.6 我的最愛

我的最愛由 `useFavorites.js` 管理，資料存在 `localStorage.favorites_v1`。

ID 規則：

```text
${name}|${lng.toFixed(6)},${lat.toFixed(6)}
```

收藏資料包含名稱、分類、座標、地址、圖示與加入時間。收藏後會在資訊面板顯示星號，地圖 marker 也會加上黃色外框。

### 4.7 共筆停車點

共筆資料由 `useCommunityParkings.js` 讀寫 Firebase RTDB 的 `/community_parkings` 節點。

新增流程：

1. 點左下角共筆 FAB。
2. 選擇新增停車位置。
3. 進入選點模式，畫面中央出現十字游標。
4. 拖動地圖讓十字對準目標位置。
5. 確認位置後填寫名稱、類別、友善程度、收費、說明與暱稱。
6. 送出後寫入 Firebase，所有使用者即時同步。

資料欄位：

```js
{
  name,
  description,
  iconKey,
  category,
  friendliness,
  priceInfo,
  lng,
  lat,
  createdBy,
  createdAt,
  updatedBy,
  updatedAt,
  history
}
```

目前共筆設計為公開協作，不需登入、不需審核。任何人都可以新增與修改共筆點，也可以刪除共筆點。

### 4.8 官方點覆寫

官方 KML 資料本身不直接被前端修改。若車友想補充或修正某個官方點，會寫入 Firebase RTDB 的 `/parking_overrides`，顯示時再把覆寫資料疊加到官方點上。

覆寫 key 規則：

```text
${name}|${lng.toFixed(6)},${lat.toFixed(6)}
```

並將 Firebase RTDB key 禁用字元 `. # $ [ ] /` 替換為 `_`。

可覆寫欄位：

- description
- iconKey
- category
- friendliness
- priceInfo

不可覆寫欄位：

- 官方名稱
- 官方座標

這樣可以避免搜尋、分享連結與資料來源對應混亂。覆寫後資訊面板會顯示「車友修改資訊」，marker 會以亮藍底標示。若要重設回官方資料，介面目前限制站方管理者操作。

### 4.9 新手導覽與 Modal

專案包含多個浮動面板與 modal，並以 `openOnly()` 控制互斥：

- 歡迎視窗
- 新手導覽
- 地圖怎麼看
- 怎麼用
- 加入手機桌面
- 分享本站
- 分享單一停車點
- 共筆停車點說明
- 贊助支持
- 設定面板
- 停車點資訊面板

新手導覽狀態存在 `localStorage.onboarding_tour_v1`，避免每次都重新顯示。

### 4.10 PWA

PWA 設定包含：

- `public/manifest.json`
- `public/serviceWorker.js`
- production 環境由 `src/main.js` 註冊 Service Worker。

Service Worker 策略：

- precache：`./`、`./index.html`、`./manifest.json`、`./logo.png`
- HTML navigation：network-first，避免舊版 `index.html` 長期卡在快取。
- 其他同源 GET：cache-first。
- activate 時清除非目前版本 cache。

## 5. 資料來源與 KML 維護

### 5.1 官方 KML

KML parser 位於 `src/utils/parseKml.js`。專案使用 `import.meta.glob` 自動掃描：

```text
src/assets/MapData/My Maps/PackingMarkerList*/doc.xml
src/assets/MapData/My Maps/PackingMarkerList*/images/*.png
```

資料夾命名規則：

- `PackingMarkerList` 視為第 1 版。
- `PackingMarkerList2` 視為第 2 版。
- 若未來新增 `PackingMarkerList3`，編號越大優先序越高。

最高編號的資料夾會被視為 canonical。重複停車點以「名稱 + 座標」去重，保留 canonical 版本。

### 5.2 icon 穩定命名

Google My Maps 匯出 KMZ 時，`images/icon-N.png` 的實體編號可能每次不同。專案不直接信任實體檔名，而是從 Style id 抽出穩定的 style hash，例如：

```text
icon-1633-7CB342
```

再對應到應用內固定的 `icon-N.png`。這份穩定對照表在 `parseKml.js` 的 `STABLE_ICON_BY_HASH`，分類對照則在 `src/constants/parking.js`。

維護注意事項：

- 如果 Alan My Maps 新增了新的 icon/style，需檢查 `STABLE_ICON_BY_HASH` 是否要補上。
- `parkingTypeList` 與 `degreeOfFriendlinessList` 使用的是穩定命名，不應直接跟著 KMZ 實體檔名改。
- 若實體圖片找不到，`resolveIconUrl()` 會產生 fallback SVG，避免 marker 破圖。

### 5.3 自動更新 KML

更新腳本：

```bash
npm run update:kml
```

腳本行為：

1. 從 Alan Google My Maps 下載 KMZ。
2. 清空 `src/assets/MapData/My Maps/PackingMarkerList2` 的舊 `doc.kml`、`doc.xml` 與 `images/`。
3. 解壓 KMZ。
4. 複製 `doc.kml` 為 `doc.xml`，供 Vite glob 讀取。
5. 寫入 `src/constants/dataUpdateDate.js`。

排程 workflow：`.github/workflows/update-kml.yml`

- 每週三台灣時間 11:50 執行。
- 可手動觸發。
- push 到 `master` 時也會跑一次。
- 若資料有變更，會自動 commit 並 push 回 `master`。

## 6. Firebase 資料結構

### 6.1 必要環境變數

`.env.local` 需放在本機，不要 commit：

```ini
VITE_MAPBOX_TOKEN=pk.xxx

VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=xxx.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_DATABASE_URL=https://xxx-default-rtdb.asia-southeast1.firebasedatabase.app
VITE_FIREBASE_STORAGE_BUCKET=xxx.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...

VITE_ADMIN_USER_IDS=xxxx-xxxx,yyyy-yyyy
```

Mapbox token 是地圖必要條件。Firebase 未設定時，官方 KML 地圖仍可使用，但共筆停車點與官方覆寫功能會停用。

### 6.2 `/community_parkings`

用途：車友新增的共筆停車點。

```text
/community_parkings/{autoKey}
```

主要欄位：

- `name`
- `description`
- `iconKey`
- `category`
- `friendliness`
- `priceInfo`
- `lng`
- `lat`
- `createdBy`
- `createdAt`
- `updatedBy`
- `updatedAt`
- `history`

查詢方式：`orderByChild('updatedAt')`，前端收到後反轉為最新在前。

### 6.3 `/parking_overrides`

用途：車友對官方點的補充或修正。

```text
/parking_overrides/{safeKey}
```

主要欄位：

- `origName`
- `origLng`
- `origLat`
- `description`
- `iconKey`
- `category`
- `friendliness`
- `priceInfo`
- `updatedBy`
- `updatedAt`
- `history`

覆寫讀取後會透過 `applyOverride(original, override)` 疊加到官方點。

### 6.4 使用者識別

專案沒有帳號系統。`useUserProfile.js` 會在本機產生匿名 ID：

```text
community_user_id
```

格式為 8 碼 hex，例如 `a3b2-c4d5`。暱稱存在：

```text
community_user_nickname
```

站方管理者判定：

- `VITE_ADMIN_USER_IDS` 包含目前 userId。
- 或本機 `localStorage.community_is_admin === '1'`。

## 7. 環境與開發

### 7.1 安裝

```bash
yarn
```

或使用 npm：

```bash
npm install
```

### 7.2 啟動開發伺服器

```bash
yarn dev
```

Vite dev server 預設 port 為 `9000`。

### 7.3 建置

```bash
yarn build
```

或：

```bash
npm run build
```

`vite.config.js` 設定：

- `base: './'`，支援 GitHub Pages 靜態部署。
- production 透過 esbuild drop `console` 與 `debugger`。
- manual chunks：`mapbox` 與 `vendor`。
- build target：`es2018`。

## 8. 部署

部署 workflow：`.github/workflows/deploy.yml`

觸發條件：

- push 到 `master`
- PR 到 `master`
- 手動 workflow dispatch

流程：

1. checkout
2. `npm install`
3. `npm run build`
4. 使用 `JamesIves/github-pages-deploy-action` 將 `dist/` 部署到 `gh-pages`

需要在 GitHub Secrets 設定：

- `VITE_MAPBOX_TOKEN`
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_DATABASE_URL`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_FIREBASE_MEASUREMENT_ID`
- `ACCESS_TOKEN`

若未來要讓正式站支援站方管理者重設覆寫，也應補上：

```text
VITE_ADMIN_USER_IDS
```

並同步放入 deploy workflow 的 env。

## 9. Analytics

GA ID 目前寫在 `index.html`：

```text
G-RC5M9PM69Z
```

事件送出由 `src/utils/analytics.js` 的 `track()` 包裝，若 gtag 被阻擋不會造成錯誤。

目前專案會追蹤常見互動，例如：

- 面板開啟
- 停車點查看
- 收藏新增/移除
- 搜尋選取
- 路線規劃
- 外部地圖開啟
- 分享
- 共筆新增/修改/刪除
- 官方覆寫新增/重設
- 新手導覽開始/完成
- 贊助視窗開啟/點擊

## 10. 重要實作注意事項

### 10.1 App.vue 是主要協調層

`App.vue` 負責串接大部分狀態：

- KML 載入與合併。
- 篩選狀態與 localStorage persistence。
- 我的最愛。
- Firebase 共筆資料。
- Firebase 官方覆寫資料。
- 搜尋結果與選取。
- 停車點資訊面板。
- route panel。
- URL query 分享與還原。
- modal 互斥與新手導覽。

修改功能時，應先確認資料流是否已在 `App.vue` 有對應狀態，避免在子元件建立重複來源。

### 10.2 官方點與共筆點資料形狀不同

官方點來自 KML：

```js
{
  properties: {
    name,
    description,
    icon,
    priceInfo,
    priceArray,
    sourceFolderIndex
  },
  geometry: {
    coordinates: [lng, lat]
  }
}
```

共筆點來自 Firebase：

```js
{
  id,
  name,
  description,
  iconKey,
  category,
  friendliness,
  priceInfo,
  coordinates: [lng, lat]
}
```

搜尋、資訊面板與 marker 顯示會在需要時將兩者轉成接近的資料形狀。

### 10.3 價格格式

目前主要辨識：

- `Free`
- `數字/h`
- `數字/d`
- `數字/次`

KML 名稱中的括號內容會被解析成 `priceInfo` 與 `priceArray`。如果價格格式過於自由，可能只會以原文字顯示，無法被價格區間精準篩選。

### 10.4 Service Worker 快取版本

`public/serviceWorker.js` 中的 `CACHE_NAME` 目前為：

```js
const CACHE_NAME = 'penueling-v4'
```

若調整快取策略、manifest、核心靜態檔，建議提高版本，避免舊 cache 長期存在。

### 10.5 Firebase security rules

目前功能設計是公開共筆，若採 MVP 可使用開放讀寫規則，但正式長期維運建議至少加上基本驗證、長度限制與濫用防護。

MVP 範例：

```json
{
  "rules": {
    "community_parkings": {
      ".read": true,
      ".write": true,
      ".indexOn": ["updatedAt"]
    },
    "parking_overrides": {
      ".read": true,
      ".write": true
    }
  }
}
```

正式環境應考慮：

- 限制欄位型別與字串長度。
- 限制座標範圍。
- 限制單位時間寫入量。
- 對刪除或重設操作加上管理者驗證。
- 加入檢舉與自動隱藏機制。

## 11. 常見維護情境

### 11.1 更新官方停車資料

建議優先使用：

```bash
npm run update:kml
```

更新後檢查：

- `src/assets/MapData/My Maps/PackingMarkerList2/doc.kml`
- `src/assets/MapData/My Maps/PackingMarkerList2/doc.xml`
- `src/assets/MapData/My Maps/PackingMarkerList2/images/`
- `src/constants/dataUpdateDate.js`

若發現分類錯亂，優先檢查 `parseKml.js` 的 style hash 與 `parking.js` 的 icon 對照。

### 11.2 新增停車類型

需要同步檢查：

- `src/utils/parseKml.js` 的 `STABLE_ICON_BY_HASH`
- `src/constants/parking.js` 的 `parkingTypeList`
- `src/constants/parking.js` 的 `degreeOfFriendlinessList`
- `src/components/CommunityParkingEditor.vue` 的 `SPECIAL_ICON`
- UI 顯示與篩選是否要新增選項

### 11.3 調整共筆欄位

需要同步檢查：

- `CommunityParkingEditor.vue`
- `useCommunityParkings.js`
- `ParkingInfoPanel.vue`
- `MapBox.vue`
- Firebase rules
- 歷史紀錄 diff 顯示欄位 `HIST_FIELD_LABEL`

### 11.4 調整官方覆寫欄位

需要同步檢查：

- `useParkingOverrides.js`
- `applyOverride()`
- `CommunityParkingEditor.vue` 的 override mode
- `ParkingInfoPanel.vue`
- `MapBox.vue` marker 與篩選使用的 effective 欄位
- 歷史紀錄 diff 顯示

### 11.5 修改部署環境變數

本機更新 `.env.local`。正式站需同步更新：

- GitHub repository secrets
- `.github/workflows/deploy.yml` 的 env 清單

## 12. 已知限制與後續建議

已知限制：

- 共筆與官方覆寫目前沒有真正登入系統，使用者身份只存在本機。
- 公開寫入 Firebase 容易被濫用，長期應加入 rules 驗證與管理流程。
- 路線規劃依賴 Mapbox Directions API，API 失敗時目前沒有完整錯誤 UI。
- 價格解析依賴既有字串格式，複雜費率可能無法被價格篩選正確命中。
- 官方 KML 若新增未知 style，需要人工補對照，否則會落入未分類或 fallback icon。

建議優先改進：

1. 加入檢舉/屏蔽機制，降低共筆與覆寫被惡意修改的風險。
2. 加入附近停車點列表，依目前地圖中心或使用者位置排序。
3. 補強 Firebase security rules，限制欄位型別、長度與座標範圍。
4. 為 Mapbox Directions API 加上錯誤提示與重試。
5. 將 `VITE_ADMIN_USER_IDS` 納入 deploy workflow，讓正式站管理者能力一致。

## 13. 快速指令

```bash
# 安裝依賴
yarn

# 開發
yarn dev

# 建置
yarn build

# 預覽建置結果
yarn preview

# 更新 Alan My Maps KML
yarn update:kml
```

