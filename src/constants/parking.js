// 停車場分類、友善程度、地圖風格常數
// 原本散在 App.vue 內，抽出來方便維護
//
// icon-N.png 的編號來自「canonical KML 來源」的 images/icon-N.png。
// 目前 canonical = src/assets/MapData/My Maps/PackingMarkerList2。
// S2 對應關係 (shape-color → 檔名):
//   汽車 1538: 紅=1 綠=2 灰=3 藍=5      叉 1898: 紅X=19
//   重機 1632: 綠=6 灰=8 藍=12 紅=13   變體 1684綠=4 / 1502綠=14
//   機車 1633: 紅=7 綠=9 灰=10 藍=11   ?    1594灰=20
//   P標 1644: 綠=15 灰=16 藍=17 紫=18

export const parkingTypeList = [
  {
    name: '全部',
    value: '',
    key: null, // null = match-all (包含未分類的新 icon)
  },
  {
    name: '汽車：汽車格(含未確認是否有重機格)',
    value: 'car',
    key: ['icon-1.png', 'icon-2.png', 'icon-3.png', 'icon-5.png'],
  },
  {
    name: '重機：有設重機專用格',
    value: 'motorcycle',
    key: ['icon-6.png', 'icon-8.png', 'icon-12.png', 'icon-13.png'],
  },
  {
    name: '機車：機車格',
    value: 'scooter',
    key: ['icon-7.png', 'icon-9.png', 'icon-10.png', 'icon-11.png'],
  },
  {
    name: '綠星:路邊友善車格(機車格開放重機停放)',
    value: 'greenStar',
    key: ['icon-14.png'],
  },
  {
    name: '重機友善店家:用餐/消費可停重機',
    value: 'friendlyShop',
    key: ['icon-4.png'],
  },
  {
    name: '綠P:重機專用路邊停車格',
    value: 'greenP',
    key: ['icon-15.png'],
  },
  {    name: '灰P:重機專用路邊停車格(未確認精準座標)',
    value: 'greyP',
    key: ['icon-16.png'],
  },
  {
    name: '藍P:普通大型共用機車格(台北市試辦)',
    value: 'blueP',
    key: ['icon-17.png'],
  },
  {    name: '紫P:時段性汽機車共用停車格，注意使用時間喔!',
    value: 'purpleP',
    key: ['icon-18.png'],
  },
  {
    name: '紅X:停都不給停',
    value: 'redX',
    key: ['icon-19.png'],
  },
  {
    name: '?:類型未確認',
    value: 'unknown',
    key: ['icon-20.png'],
  },
]

// 由 iconKey 反查「分類短名」,用於共筆停車點等沒有 KML 資料夾名稱的點。
// 取 parkingTypeList 中對應條目 name 的「:」或「:」前半部 (例如 "汽車" / "綠星" / "重機友善店家")。
export function getIconCategoryName(iconKey) {
  if (!iconKey) return '未分類'
  const hit = parkingTypeList.find(
    (p) => Array.isArray(p.key) && p.key.includes(iconKey)
  )
  if (!hit) return '未分類'
  return hit.name.split(/[：:]/)[0]
}

export const degreeOfFriendlinessList = [
  {
    name: '全部',
    value: '',
    key: null, // null = match-all (包含未分類的新 icon)
  },
  {
    name: '最友善：有後牌辨析',
    value: 'friendly',
    key: ['icon-2.png', 'icon-4.png', 'icon-6.png', 'icon-9.png', 'icon-14.png', 'icon-15.png'],
  },
  {
    name: '最傳統：悠遊卡、按鈕取票',
    value: 'normal',
    key: ['icon-5.png', 'icon-11.png', 'icon-12.png', 'icon-17.png'],
  },
  {
    name: '最靠北：按鈕請管理員協助、前牌辨析',
    value: 'unfriendly',
    key: ['icon-1.png', 'icon-7.png', 'icon-13.png', 'icon-19.png'],
  },
  {
    name: '未確定',
    value: 'unknown',
    key: ['icon-3.png', 'icon-8.png', 'icon-10.png', 'icon-16.png', 'icon-20.png'],
  },
]

export const mapStyleList = [
  {
    name: '依系統設定',
    value: 'system',
    theme: 'system',
  },
  {
    name: '暗色模式',
    value: 'mapbox://styles/jamestim9215/ckvkdj5cd1q4115nzwxa9rny3',
    theme: 'dark',
  },
  {
    name: '亮色模式',
    value: 'mapbox://styles/jamestim9215/ckvueghhu2woc14nrsgysx41v',
    theme: 'light',
  },
]
