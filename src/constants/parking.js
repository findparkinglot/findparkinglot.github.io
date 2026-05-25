// 停車場分類、友善程度、地圖風格常數
// 原本散在 App.vue 內，抽出來方便維護

export const parkingTypeList = [
  {
    name: '全部',
    value: '',
    key: Array.from({ length: 19 }, (_, i) => `icon-${i + 1}.png`),
  },
  {
    name: '汽車：汽車格(含未確認是否有重機格)',
    value: 'car',
    key: ['icon-1.png', 'icon-3.png', 'icon-5.png', 'icon-6.png'],
  },
  {
    name: '重機：有設重機專用格',
    value: 'motorcycle',
    key: ['icon-2.png', 'icon-4.png', 'icon-7.png', 'icon-8.png'],
  },
  {
    name: '機車：機車格',
    value: 'scooter',
    key: ['icon-9.png', 'icon-10.png', 'icon-13.png'],
  },
  {
    name: '綠P:重機專用路邊停車格',
    value: 'greenP',
    key: ['icon-15.png'],
  },
  {
    name: '黃P:重機與汽車共享路邊停車格',
    value: 'yellowP',
    key: ['icon-16.png'],
  },
  {
    name: '紫P:時段性汽機車共用停車格，注意使用時間喔!',
    value: 'purpleP',
    key: ['icon-17.png'],
  },
  {
    name: '紅X:停都不給停',
    value: 'redX',
    key: ['icon-12.png'],
  },
  {
    name: '施工中',
    value: 'fix',
    key: ['icon-14.png'],
  },
]

export const degreeOfFriendlinessList = [
  {
    name: '全部',
    value: '',
    key: Array.from({ length: 19 }, (_, i) => `icon-${i + 1}.png`),
  },
  {
    name: '最友善：有後牌辨析',
    value: 'friendly',
    key: ['icon-2.png', 'icon-3.png', 'icon-9.png', 'icon-15.png'],
  },
  {
    name: '最傳統：悠遊卡、按鈕取票',
    value: 'normal',
    key: ['icon-5.png', 'icon-8.png', 'icon-11.png', 'icon-13.png'],
  },
  {
    name: '最靠北：按鈕請管理員協助、前牌辨析',
    value: 'unfriendly',
    key: ['icon-1.png', 'icon-7.png', 'icon-10.png', 'icon-12.png'],
  },
  {
    name: '未確定',
    value: 'unknown',
    key: ['icon-4.png', 'icon-6.png'],
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
