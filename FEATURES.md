# 重機能停哪? — 功能總覽

> 全台重機停車地圖。基於 Vue 3 + Vite + Mapbox GL JS + Firebase Realtime Database 的純前端 PWA,部署於 GitHub Pages。

---

## 1. 技術堆疊

| 類別 | 套件 / 版本 |
|---|---|
| 前端框架 | Vue 3.4.21 (Composition API, `<script setup>`) |
| 建置工具 | Vite 5.2, `@vitejs/plugin-vue` |
| 地圖引擎 | Mapbox GL JS 3.3.0 |
| 後端 | Firebase Realtime Database 12.13 (亞洲新加坡 `asia-southeast1`) |
| 樣式 | 原生 CSS + Sass + Material Icons (Outlined) |
| PWA | 自寫 Service Worker (precache + network-first HTML / cache-first 同源資源) |
| 部署 | GitHub Actions → GitHub Pages (`gh-pages` 分支) |
| 分析 | Google Analytics (gtag) |

---

## 2. 資料來源

### 2.1 內建靜態資料 (KML + JSON)
由 Google My Maps 維護後匯出,主流程實際讀取 [src/assets/MapData/My Maps/PackingMarkerList/doc.xml](src/assets/MapData/My%20Maps/PackingMarkerList/doc.xml),分為以下分類:

| 分類 | 檔案 |
|---|---|
| 大重停車記事 | `大重停車記事.kml/json` |
| 公有汽車費率 (停管法) | `公有汽車費率(適用停管法).kml/json` |
| 私人汽車費率 | `私人汽車費率.kml/json` |
| 私人機車費率 | `私人機車費率.kml/json` |
| 重機個別費率 | `重機個別費率(含公有私人).kml/json` |
| 禁停重機 | `禁停重機.kml/json` |
| 路邊友善車格 | `路邊友善車格.kml/json` |
| 台中黃先生恥辱柱 (1110071254 公告) | 同名 kml/json |

座標 → 地址查表: [src/assets/json/address.json](src/assets/json/address.json)

### 2.2 共筆停車點 (Firebase RTDB)
- 節點: `community_parkings/{autoKey}`
- 每筆主欄位: `{ name, description, iconKey, category, friendliness, priceInfo, lng, lat, createdBy, createdAt, updatedBy, updatedAt }`
- 子節點 `history/{autoKey}`: `{ action: 'create'|'update'|'delete', at, by, snapshot }`
- 訂閱: `orderByChild('updatedAt')` + `onValue` 即時同步

### 2.3 官方點覆寫層 (Firebase RTDB) — 新
- 節點: `parking_overrides/{safeKey}`
- safeKey 規則: `${name}|${lng(6位小數)},${lat(6位小數)}` (RTDB 禁用字元置換為 `_`)
- 主欄位: `{ origName, origLng, origLat, description?, iconKey?, category?, friendliness?, priceInfo?, updatedBy, updatedAt }`
- 子節點 `history/{autoKey}`: `{ action: 'override'|'reset', at, by, snapshot }`
- 用途: 不變動原始 KML 的情況下,讓車友對「同一官方點」套上一層補充資訊 (實際費率、補充說明、更正分類…)
- 顯示時若存在覆寫 → 以覆寫資料為主,並在資訊面板上顯示「車友修改資訊」標記
- 官方「名稱」刻意不允許覆寫,避免搜尋對不上或惡意改名

---

## 3. 地圖功能

- **預設中心**: 台北車站 `[121.5173, 25.0476]`
- **maxBounds**: 台灣本島 (西南 `119.36, 21.83` / 東北 `122.07, 25.34`)
- **Marker 形式**: HTML DOM marker (非 symbol layer)
- **檢視區渲染**: 只繪製目前 `bounds` 內的點,避免一次塞數千 DOM
- **更新節流**: `dragend` / `zoomend` → `refreshMarkers`,內含 debounce 80ms + `requestIdleCallback` (timeout 250ms)
- **點擊 marker**: `flyTo` zoom 17 → 開啟資訊面板 → 從 `address.json` 補地址
- **路線色**: cyan `#2ee7d6`

### 3.1 Marker Cluster (像素網格) — 新
- 當 `zoom < 18` 時改用「像素網格叢集」演算法 (140px / 格)
- 同一格內 ≥ 2 點 → 合併為「數字圈」cluster
  - 圈大小依 `log2(count)` 連續放大 (34px ~ 84px),字級同步縮放
  - 點擊 cluster → `flyTo` 中心 + 放大 2 級 (最多到 17)
- `zoom ≥ 18` 時全部以原 PIN 樣式顯示
- 共筆點與官方點皆參與 cluster (統一資料結構後一次性叢集)

### 3.2 Marker 樣式規則
| 類型 | 樣式 |
|---|---|
| 一般官方點 | 透明邊框 + 各分類原色底 |
| 我的最愛 | 黃框 + 黃 tag `#ffc107` |
| 共筆停車點 | 薰衣草紫底 `#b39ddb`,圖示沿用 iconKey |
| 共筆 + 最愛 | 薰衣草紫底 + 黃框 |
| Cluster 圈 | 主色圓形數字圈 |

---

## 4. 篩選 (Settings Panel)

| 項目 | 可選值 |
|---|---|
| `parkingType` | 全部 / car / motorcycle / scooter / greenP / yellowP / purpleP / redX / fix |
| `degreeOfFriendliness` | 全部 / friendly / normal / unfriendly / unknown |
| `parkingPriceType` | 全部 / free / h (計時) / d (計次) |
| 價格區間 | 0–300 元,step 10 (只在 h/d 顯示) |
| `onlyFavorites` | 只看我的最愛 (switch) |
| 主題色 | 暗 / 亮 Mapbox style 切換 |

- 篩選邏輯位於 [src/composables/useMarkerFilters.js](src/composables/useMarkerFilters.js),type 與 friendliness 採「icon key 交集」(兩條件同時命中才顯示)
- **狀態持久化** (新): 所有篩選 (含 `onlyFavorites`) 寫入 `localStorage.filters_v1`,重整後自動還原

---

## 5. 搜尋

- 元件: [src/components/SearchBar.vue](src/components/SearchBar.vue)
- 演算法: [src/composables/useParkingSearch.js](src/composables/useParkingSearch.js)
  - 搜尋欄位: `name` + `description` (大小寫不敏感)
  - 評分: `name` 命中加權更高,命中位置越前分數越高
  - 結果最多 15 筆
- 鍵盤: `↑ ↓` 切換、`Enter` 選取、`Esc` 關閉
- 選取後: 開資訊面板 → `flyTo`
- 目前只搜尋官方 KML 資料 (共筆點未納入搜尋,可作為未來優化)

---

## 6. 路線規劃

- 引擎: Mapbox Directions API (`zh-Hant`)
- **交通方式** (新): `driving` (預設) / `cycling` / `walking` — 在 `RouteSteps.vue` 內 tab 切換,即時重新計算路線
- 參數: `overview=full`, `steps=true`, `exclude=ferry`, `geometries=geojson`
- UI: [RouteSteps.vue](src/components/RouteSteps.vue) 顯示時間 / 距離 / 文字指示
- 每次從資訊面板「路線規劃」進入時 → 重設為 `driving`
- 外部導航 deep link:
  - Apple Maps: `maps://?daddr=lat,lng&dirflg=d`
  - Google Maps: `/maps/dir/?api=1&destination=...&travelmode=driving`

---

## 7. 我的最愛

- 儲存: `localStorage` key = `favorites_v1`
- ID 規則: `${name}|${lng(6位小數)},${lat(6位小數)}`
- 欄位: `{ id, name, parkingType, geometry, address, icon, addedAt }`
- 視覺:
  - 資訊面板星號黃色
  - 地圖 marker 黃框 + 黃 tag
  - 設定面板顯示 `favoritesCount` badge
  - 可開啟 `onlyFavorites` 只顯示已收藏

---

## 8. 共筆停車點 (Community Parking)

> 任何人都可以新增 / 修改 / 刪除,類似 wiki。

### 8.1 新增流程
1. 點左下 FAB「新增共筆停車點」
2. 進入 `addPickMode` (畫面中央顯示青色 `gps_fixed` 十字)
3. 拖動地圖把目標對準十字,確認位置
4. 開啟編輯器填欄位 → 寫入 RTDB

### 8.2 編輯器欄位 ([CommunityParkingEditor.vue](src/components/CommunityParkingEditor.vue))
- 名稱 (必填)
- 類別 `category`
- 友善程度 `friendliness` (特殊類別會自動鎖定,如綠P/黃P/紫P/紅X/施工)
- 收費類型: `free` / `h` / `d` / `custom` (自由文字)
- 說明 description (選填)
- 暱稱 nickname (選填,存本機 `community_user_nickname`)
- **修改紀錄面板** (新): 顯示最近 5 筆 (可展開全部) 變更,內含動作 / 修改者 / 時間 / 欄位 diff

### 8.3 使用者識別
- 本機產生匿名 ID: `community_user_id` (8 碼 hex)
- 暱稱: `community_user_nickname`
- 兩者皆存 localStorage,無帳號系統
- **站方管理者** (新):
  - `.env.local` 設 `VITE_ADMIN_USER_IDS=xxxx-xxxx,yyyy-yyyy`
  - 或本機臨時設 `localStorage.community_is_admin = '1'`
  - 由 [useUserProfile.js](src/composables/useUserProfile.js) 判定 `isAdmin`

### 8.4 編輯 / 刪除
- 點共筆 marker → 資訊面板 → 編輯按鈕
- 任何人皆可改任何人的資料,所有變更會寫入 history

---

## 9. 官方點覆寫 (Override) — 新

> 官方 (KML) 資料是只讀的,但車友可以為單一官方點加一層「覆寫」(實際費率變了、補充說明…),不修改原檔。

### 9.1 觸發
- 在官方點的資訊面板上點「異議 / 補充」(已有覆寫則顯示為「修改車友資訊」)
- 進入 [CommunityParkingEditor.vue](src/components/CommunityParkingEditor.vue) 的 `override` 模式
  - 座標固定 (不能改)
  - 名稱固定 (官方原名,不可被覆寫)
  - 可改: `description / iconKey / category / friendliness / priceInfo`

### 9.2 重設 / 歷史
- 若該點已存在覆寫,編輯器額外顯示「重設為官方資料」按鈕 (移除整筆覆寫)
- 編輯器內顯示覆寫的歷史變更紀錄,欄位 diff 以「目前顯示給使用者的內容」(即套用既有覆寫後的官方資料) 為比對基準,所見即所得

### 9.3 顯示
- 套用覆寫後的資訊面板會出現「車友修改資訊」標記 + 更新者暱稱
- Marker 樣式不變 (仍是原本的 icon),不會與共筆點混淆

---

## 10. 分享單一停車點 — 新

### 10.1 URL Query
- 開啟資訊面板時,瀏覽器網址自動加上 `?lng=xxx.xxxxxx&lat=yy.yyyyyy`
- 關閉資訊面板時清除 query (`history.replaceState`)

### 10.2 進站還原
- 進站偵測 URL query,優先比對 **共筆點** → 再比對 **靜態 KML**
- 兩者皆未匹配 → 直接 `flyTo` 到座標
- 共筆 / KML 載入完成的 watcher 會自動重試 resolve

### 10.3 分享 Modal
- 資訊面板上「分享」按鈕 → 開啟「分享停車點」Modal
- 提供 Facebook / LINE / Twitter / 複製連結 4 種方式
- 與站方分享 (整站連結) 共用同一個 `shareLinkHandler`,但 `track('share')` 帶 `scope: 'spot'` 區分

---

## 11. 主題

- **暗色** (預設): 背景 `#141d1f`,主色 cyan `#2ee7d6`
- **亮色**: 對應的 Mapbox light style
- 主題綁定 `mapStyleList[].theme`,寫入 `localStorage.mapStyles`
- **`useThemeMode` composable** (新): 第一次進站時若沒設定過,會依 `prefers-color-scheme` 自動判斷,存入 `localStorage.themeMode`
- 共筆色: 薰衣草紫 `#b39ddb`
- 最愛色: 金黃 `#ffc107`

---

## 12. PWA

### 12.1 Manifest
- 名稱: 「重機能停哪?」
- `display: standalone`, `start_url: ./`
- theme: `#2ee7d6` / background: `#141d1f`
- icon: 192 + 512 (any maskable)

### 12.2 Service Worker ([public/serviceWorker.js](public/serviceWorker.js))
- 僅 production 註冊
- precache: `./`, `./index.html`, `./manifest.json`, `./logo.png`
- HTML / navigation: **network-first** (避免舊版 index 卡住)
- 其他同源 GET: **cache-first**
- `activate` 階段清除非當前版本 cache

---

## 13. Modals

| Modal | 內容 |
|---|---|
| 歡迎 | 每次進站顯示;含「本次新功能卡片」(最愛 / 搜尋 / 共筆 / 價格篩選) + 外部連結 |
| 地圖怎麼看 | icon ↔ 格位、顏色 ↔ 友善程度、價格格式說明 |
| 怎麼用 | FAQ1/2/3 圖文教學 |
| 加入手機桌面 | iOS Safari 加入主畫面流程 (4 張圖) |
| 共筆停車點說明 | 新增 / 編輯流程 + 公開協作注意事項 |
| 分享停車點 (新) | 單一停車點的 LINE / FB / Twitter / 複製連結分享 |

> 互斥邏輯: 同一時間只允許一個面板 / Modal 開啟 (`openOnly()`),只有路線面板可與其他並存。

---

## 14. 定位

- `MapBox.vue` `onMounted` 時直接呼叫 `getCurrentPosition` (首訪會跳權限提示)
  - options: `enableHighAccuracy:false`, `timeout:8000`, `maximumAge:60000`
- 成功且在台灣範圍 → 以使用者座標為中心
- 成功但在範圍外 → fallback 台北
- 失敗 / 拒絕 / 逾時 → 以預設台北中心開圖
- 另外掛載 Mapbox `GeolocateControl` (`trackUserLocation` + `showUserHeading`)

---

## 15. 部署 Pipeline

[.github/workflows/deploy.yml](.github/workflows/deploy.yml)
- 觸發: push / PR / 手動 (`workflow_dispatch`) 到 `master`
- 步驟: checkout → npm install → `npm run build` (注入 `VITE_MAPBOX_TOKEN` + 8 個 `VITE_FIREBASE_*` + `VITE_ADMIN_USER_IDS` secrets) → JamesIves/github-pages-deploy-action@v4 推到 `gh-pages`
- 產物: `dist/`

---

## 16. 已實作的效能優化

- `<link rel="preconnect">` to Mapbox API / Events / Firebase RTDB
- `<link rel="dns-prefetch">` for `api.mapbox.com`
- Marker refresh debounce 80ms + `requestIdleCallback`
- 只渲染目前 viewport 內 marker
- **像素網格 cluster** (新) — 大幅減少低 zoom 時的 DOM 數量
- 多個 watch 合併到單一 `refreshMarkers`
- Vite `manualChunks`: `mapbox` 與 `vendor` 分包
- production `drop console / debugger`
- Service Worker 僅 production 啟用
- Override / 共筆訂閱: 模組層級單例 + subscribers 計數,避免重複建立 listener

---

## 17. 分析

### Google Analytics (`gtag`, ID: `G-RC5M9PM69Z`)
追蹤事件 ([src/utils/analytics.js](src/utils/analytics.js)):
- 面板/Modal: `panel_open`
- 停車點互動: `parking_view` (含 `overridden` 標記)、`favorite_add` / `favorite_remove`
- 搜尋: `search_select`
- 路線: `route_start`、外開地圖: `open_external_map`
- 分享: `share`、`share_spot_open`
- 共筆: `community_add_start` / `community_add_submit` / `community_edit_submit` / `community_delete`
- 覆寫: `override_edit_start` / `override_submit` / `override_reset`

> 本站為公益專案,不含廣告。

---

# 🚀 未來可加功能腦力激盪

下面依「**投資報酬率高 → 工程量大但很潮**」排序,你可挑感興趣的優先做。

> ✅ 已完成的舊項目: 篩選狀態持久化、分享單一停車點連結、共筆點改 Cluster、路線交通方式切換、暗 / 亮跟系統。

## 🟢 容易做、即見效益 (1–3 天可完成)

### 1. **「附近停車格」列表 (Bottom Sheet)**
以地圖中心 (或使用者位置) 為原點,列出 1km 內的點,按距離排序,點擊跳到 marker。重機族最常用的場景之一。

### 2. **共筆點 / 覆寫的「最近更新」時間軸**
資訊面板顯示 `XX 分鐘前由 OO 更新`,並可在 Welcome modal 加「最近新增的共筆點 Top 5」吸引回訪。

### 3. **離線地圖瓦片快取**
Service Worker 加 Mapbox tile 的 cache-first (with TTL),離線 / 訊號弱時還能看常用區域。

### 4. **快捷篩選 Chip Bar**
在搜尋列下方放一排 chip: `免費` `重機格` `路邊友善` `禁停區` `我的最愛`,一鍵切換最常用組合,免進設定面板。

### 5. **「回我的位置」 FAB**
Mapbox `GeolocateControl` 已有,但可以做個顯眼的 cyan FAB,點下去 reset to user location。

### 6. **共筆點納入搜尋**
目前 `searchParkings` 只跑 `mapDataList`,把共筆點 (含 `iconKey`) 也轉成同樣結構塞進去搜尋。

### 7. **覆寫衝突警示**
編輯覆寫的當下若有別人也在同一筆做修改 (RTDB `updatedAt` 差異),提示「資料剛被別人改了,要看新版嗎?」

---

## 🟡 中等工程 (1–2 週)

### 8. **改用 Mapbox GeoJSON Source + 原生 Cluster**
目前是 DOM marker 自訂像素網格,可進一步改用 `addSource({type:'geojson', cluster:true})` + `circle layer`,效能更好且支援 cluster spider。

### 9. **回報過時 / 錯誤資訊**
資訊面板加「這格已不存在 / 費率變了」回報按鈕,寫入 Firebase 一個 `reports/` node。共筆點則直接讓任何人改 (現況)。

### 10. **照片上傳 (共筆點)**
編輯器加上傳照片,存 Firebase Storage,資訊面板顯示輪播。
- 注意成本: Storage 免費 5GB
- 防濫用: 限制檔案大小 + 自動壓縮 (`browser-image-compression`)

### 11. **路線中途搜尋停車**
規劃路線後,沿路線 buffer 500m 內顯示符合篩選的停車點,適合「我要去 OO 但要找地方停車再走過去」。

### 12. **多語系 (英 / 日)**
台灣觀光客或長期居留外國重機族不少。`vue-i18n` 包一下,所有中文字串集中管理。

### 13. **檢舉 / 屏蔽共筆點 + 覆寫**
任何人可改是優點也是風險。加上 `reports` 機制,同一筆被 3 人以上回報就自動隱藏 + 通知 `isAdmin` 管理者,或要求重新審核。

### 14. **共筆 / 覆寫「還原到任意歷史版本」**
目前 history 只顯示變動,加「還原到這版」按鈕,被破壞時可一鍵還原。

### 15. **「行程紀錄」**
本機儲存最近 10 次規劃過的路線,Welcome modal 顯示快捷:「再走一次去 OO」。

### 16. **「停車場詳細頁」獨立路由 + OG image**
目前用 query 帶 lng/lat,加 `vue-router` 後可改成 `/spot/<id>` 並動態 meta tag,LINE / FB 分享卡片會漂亮很多。

---

## 🔴 大工程但很潮 (1 個月以上 / 需要後端)

### 17. **匿名登入 → 編輯紀錄追蹤**
Firebase Anonymous Auth 取代純 localStorage ID。
- 好處: 換裝置仍可認領「我的共筆」、做 reputation system
- 進階: Google / Apple SSO 升級,可解鎖更多功能

### 18. **使用者個人主頁**
顯示某使用者新增的所有共筆 + 覆寫 + 排行榜「貢獻最多的鄉民」。能玩遊戲化會有更多人主動標記。

### 19. **AI 自動分類 / 描述**
使用者上傳照片 → 後端 (Cloud Functions) 呼叫 GPT-4V 或 Gemini 自動辨識「黃線 / 紅線 / 重機格 / 機車格 / 卸貨區」並建議 friendliness 分類,大幅降低標記門檻。

### 20. **即時擁擠度 (眾包 check-in)**
讓使用者「我現在停在這 / 這格滿了 / 有空位」一鍵 check-in,5 分鐘內的回報疊加成熱力圖。配合 push notification。

### 21. **官方資料自動同步**
寫個 GitHub Actions Cron Job,每週去抓各縣市開放資料平台 (e.g. 台北市停管處 API、台中市公開資料) 自動更新 KML/JSON,免手動維護 My Maps。
- 台北: https://data.taipei/
- 各縣市多半有提供「路邊停車格 (含機車)」開放資料
- 自動同步後,過去的「車友覆寫」需要做衝突處理 (例如 origLng/origLat 略有偏移時的對應策略)

### 22. **iOS / Android Native Wrapper**
Capacitor 包一層,上架 App Store / Play Store。主要好處: 背景定位、推播、原生分享 sheet。

### 23. **重機路線推薦 (避開禁停 + 多停車選擇)**
不只是 A→B 導航,而是「我要去 OO,幫我規劃一條沿路有 X 個友善停車點的路線」,結合 Mapbox 自訂 routing profile。

---

# 💡 個人推薦的「下一步 3 件事」

1. **#1 附近停車格 Bottom Sheet** — 1–2 天,行為轉換率最高
2. **#4 快捷篩選 Chip Bar** — 半天,首屏 UX 立刻 +30%
3. **#13 檢舉 / 屏蔽機制** — 1–2 天,共筆與覆寫上線後遲早會遇到惡意,提前布建

---

> 文件版本: 2026-05-25  
> 維護: 跟著 [README.md](README.md) 一起更新
