// 將 Google My Map 匯出的 KML/XML 解析為地圖用資料結構
// 原本邏輯來自 App.vue MapDataInit()，抽出方便維護與測試

// 透過 Vite 的 import.meta.glob 把所有 marker icon 在 build 時一起打包，
// 並產生帶 hash 的最終 URL（dev / production 都通用）。
const ICON_MODULES = import.meta.glob(
  '../assets/MapData/My Maps/PackingMarkerList/images/*.png',
  { eager: true, query: '?url', import: 'default' }
)

// 以檔名（例如 "icon-5.png"）為 key 建立查表
const ICON_URL_MAP = Object.fromEntries(
  Object.entries(ICON_MODULES).map(([path, url]) => {
    const filename = path.split('/').pop()
    return [filename, url]
  })
)

const findIcon = (xml, iconMapId) => {
  let icon = ''
  const styleMaps = xml.kml.Document[0].StyleMap || []
  let matched = false

  for (const sm of styleMaps) {
    if (sm.$.id === iconMapId.replace('#', '')) {
      icon = sm.Pair[0].styleUrl[0]
      matched = true
      break
    }
  }
  if (!matched) icon = iconMapId

  const styles = xml.kml.Document[0].Style || []
  for (const s of styles) {
    if (s.$.id === icon.replace('#', '')) {
      icon = s.IconStyle[0].Icon[0].href[0].replace('images/', '')
      break
    }
  }
  return icon
}

const getPriceAndType = (name) => {
  const inside = name.split('(')[1]?.split(')')[0]?.replace(/ /g, '') ?? ''
  let priceArray = inside ? inside.split('|') : []

  if (priceArray.length > 0 && priceArray[0].match(/---|--/)) {
    priceArray = []
  }
  if (priceArray.length > 0 && priceArray[0].match(/-/)) {
    priceArray = priceArray[0].split('-')
  }

  return {
    priceType: inside,
    priceValue: priceArray,
  }
}

export function parseKml(xml) {
  return xml.kml.Document[0].Folder.map((folder) => ({
    name: folder.name[0],
    features: folder.Placemark.map((place) => {
      const parts = place.Point[0].coordinates[0].trim().split(',')
      const priceInfo = getPriceAndType(place.name[0])

      return {
        properties: {
          name: place.name[0],
          description: place.description ? place.description[0] : '',
          iconId: place.styleUrl[0],
          icon: findIcon(xml, place.styleUrl[0]),
          priceInfo: priceInfo.priceType,
          priceArray: priceInfo.priceValue,
        },
        geometry: {
          coordinates: [parts[0], parts[1]],
        },
      }
    }),
  }))
}

export function resolveIconUrl(url) {
  if (!url) return ''
  if (url.match('http')) return url
  // url 可能是 "icon-5.png" 或含路徑，統一取檔名查表
  const filename = url.split('/').pop()
  return ICON_URL_MAP[filename] || ''
}
