// 將 Google My Map 匯出的 KML/XML 解析為地圖用資料結構
// 原本邏輯來自 App.vue MapDataInit()，抽出方便維護與測試

const ICON_DIR = '/src/assets/MapData/My Maps/PackingMarkerList/images/'

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
  return new URL(`${ICON_DIR}${url}`, import.meta.url).href
}
