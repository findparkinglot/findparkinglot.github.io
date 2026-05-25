// 將 Google My Map 匯出的 KML/XML 解析為地圖用資料結構
// 原本邏輯來自 App.vue MapDataInit()，抽出方便維護與測試
//
// 多來源支援與 icon 對映規則:
// Google My Map 匯出的 KML 中,Style id 形如 `icon-{4位shape}-{6位hex顏色}[-變體]`,
// 其中 `icon-NNNN-XXXXXX` 是「Google 圖庫」中的穩定識別碼,每次匯出都不會變;
// 但匯出的 images/icon-N.png 檔名編號會依當次匯出的順序重新編。
//
// 優先順序:「資料夾編號越大 (越新) 越優先」,例如:
//   PackingMarkerList3 > PackingMarkerList2 > PackingMarkerList
// 編號最大者作為規範 (canonical),其 icon 檔名直接以 "icon-N.png" 對外使用;
// 其他來源中若有相同 styleHash,icon 檔名會被重新對映回 canonical 的對應檔名,
// 確保上層 constants/parking.js、Firebase 覆寫資料、共筆編輯器都以「最新版」為準。
// (若某 marker 同名同座標出現在多個來源,以 canonical 來源的版本為主)

// 透過 Vite 的 import.meta.glob 自動掃描 My Maps 底下所有 PackingMarkerList* 子資料夾,
// 未來加 PackingMarkerList3 / 4 / 5 ... 不需修改任何程式碼。
const RAW_XML_MODULES = import.meta.glob(
  '../assets/MapData/My Maps/PackingMarkerList*/doc.xml',
  { eager: true, import: 'default' }
)
const RAW_ICON_MODULES = import.meta.glob(
  '../assets/MapData/My Maps/PackingMarkerList*/images/*.png',
  { eager: true, query: '?url', import: 'default' }
)

// 從路徑 .../PackingMarkerList<N>/... 取出 N。
// 無尾號的 "PackingMarkerList" 視為第 1 版 (folderIndex = 1) 但「優先序最低」;
// 有尾號者 N=2,3,4... 越大越新越優先。
const FOLDER_INDEX_RE = /\/PackingMarkerList(\d*)\//
const getFolderIndex = (p) => {
  const m = FOLDER_INDEX_RE.exec(p)
  if (!m) return -1
  return m[1] === '' ? 1 : Number(m[1])
}

// 依優先序由大到小排序:folderIndex 越大越前面 (canonical 在 [0])
const sortedXmlEntries = Object.entries(RAW_XML_MODULES)
  .map(([p, xml]) => ({ folderIndex: getFolderIndex(p), xml }))
  .filter((e) => e.folderIndex > 0)
  .sort((a, b) => b.folderIndex - a.folderIndex)

// canonical = 排序後第一個來源 (folderIndex 最大者) 。
// 若沒有任何來源 (理論不會發生),退回 -1。
const CANONICAL_FOLDER_INDEX = sortedXmlEntries[0]?.folderIndex ?? -1

// 來源 tag 規則:
//   canonical 來源 → ''      (icon 對外使用 "icon-N.png")
//   其他來源       → "s{N}"  (icon 對外使用 "s{N}:icon-N.png")
// 這樣每個資料夾的 tag 固定 (PackingMarkerList → s1、PackingMarkerList2 → s2...),
// 只有「誰是 canonical」會隨著新增更高編號的資料夾而改變。
const folderTag = (folderIndex) =>
  folderIndex === CANONICAL_FOLDER_INDEX ? '' : `s${folderIndex}`

const XML_SOURCES = sortedXmlEntries.map(({ xml, folderIndex }) => ({
  xml,
  folderIndex,
  tag: folderTag(folderIndex),
}))

// ICON_URL_MAP key:
//   canonical (folderIndex 最大): "icon-N.png"          -> URL
//   其他來源                      : "s{N}:icon-N.png"   -> URL
const ICON_URL_MAP = {}
for (const [p, url] of Object.entries(RAW_ICON_MODULES)) {
  const fi = getFolderIndex(p)
  if (fi <= 0) continue
  const tag = folderTag(fi)
  const file = p.split('/').pop()
  ICON_URL_MAP[tag ? `${tag}:${file}` : file] = url
}

// 供 App.vue 使用:直接取得「已自動掃描」的來源清單 (包含 tag、folderIndex)
export function loadKmlSources() {
  return XML_SOURCES.map(({ xml, tag, folderIndex }) => ({ xml, tag, folderIndex }))
}

// folderIndex → 人類可讀的「資料來源名稱」
// 對應資料夾:
//   1 → PackingMarkerList  (原版)
//   2 → PackingMarkerList2 (Alan 維護的分支)
export const SOURCE_LABELS = {
  // 1: '大重停車記事',
  2: 'Alan大重停車記事',
}

export function getSourceLabel(folderIndex) {
  if (folderIndex == null) return ''
  return SOURCE_LABELS[folderIndex] || `PackingMarkerList${folderIndex === 1 ? '' : folderIndex}`
}

// 從 Style id 中抽出穩定的 styleHash,例如:
//   "icon-1538-7CB342-labelson"        -> "icon-1538-7CB342"
//   "icon-1538-757575-nodesc-highlight" -> "icon-1538-757575"
const STYLE_HASH_RE = /^(icon-\d{3,4}-[A-Fa-f0-9]{6})/
function extractStyleHash(styleId) {
  if (!styleId) return ''
  const m = STYLE_HASH_RE.exec(styleId.replace(/^#/, ''))
  return m ? m[1] : ''
}

// 把 iconMapId (可能指向 StyleMap) 解析成真正的 Style id
function resolveStyleId(xml, iconMapId) {
  const id = (iconMapId || '').replace(/^#/, '')
  const styleMaps = xml.kml.Document[0].StyleMap || []
  for (const sm of styleMaps) {
    if (sm.$.id === id) {
      return (sm.Pair[0].styleUrl[0] || '').replace(/^#/, '')
    }
  }
  return id
}

// 從 Style id 找到對應的 icon 檔名 (例如 "icon-5.png")
function findIconFile(xml, styleId) {
  const id = (styleId || '').replace(/^#/, '')
  const styles = xml.kml.Document[0].Style || []
  for (const s of styles) {
    if (s.$.id === id) {
      const href = s.IconStyle?.[0]?.Icon?.[0]?.href?.[0] || ''
      return href.replace('images/', '')
    }
  }
  return ''
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

// 解析單一 KML,並一併產出該來源的 styleHash -> 檔名 對照表
export function parseKmlWithMeta(xml) {
  const iconMap = {}
  const rawFolders = xml.kml.Document[0].Folder || []
  const folders = rawFolders.map((folder) => ({
    name: folder.name[0],
    features: (folder.Placemark || [])
      // 只處理含 <Point> 座標的 Placemark (避免空資料夾或線/面類型造成解析錯誤)
      .filter((place) => place.Point?.[0]?.coordinates?.[0])
      .map((place) => {
        const parts = place.Point[0].coordinates[0].trim().split(',')
        const priceInfo = getPriceAndType(place.name[0])
        const iconMapId = place.styleUrl?.[0] || ''
        const resolvedStyleId = resolveStyleId(xml, iconMapId)
        const iconFile = findIconFile(xml, resolvedStyleId)
        const styleHash = extractStyleHash(resolvedStyleId)

        if (styleHash && iconFile) iconMap[styleHash] = iconFile

        return {
          properties: {
            name: place.name[0],
            description: place.description ? place.description[0] : '',
            iconId: iconMapId,
            icon: iconFile,
            styleHash,
            priceInfo: priceInfo.priceType,
            priceArray: priceInfo.priceValue,
          },
          geometry: {
            coordinates: [parts[0], parts[1]],
          },
        }
      }),
  }))
  return { folders, iconMap }
}

// 維持向後相容: 既有呼叫 parseKml(xml) 仍可使用,只回傳 folders 陣列
export function parseKml(xml) {
  return parseKmlWithMeta(xml).folders
}

// 建立用於去重的 key: 名稱 + 座標 (四捨五入到 5 位小數,避免浮點誤差)
function featureKey(name, coord) {
  const lng = Number(coord?.[0]).toFixed(5)
  const lat = Number(coord?.[1]).toFixed(5)
  return `${name}@${lng},${lat}`
}

// 合併多個 KML 來源:
//   - 第一個來源 (經 loadKmlSources 排序後為 folderIndex 最大、最新) 視為 canonical,保留其所有資料與 icon 對映
//   - 後續來源中,凡與 canonical「名稱 + 座標」相同者 → 排除 (以較新的 canonical 為主)
//   - 後續來源中,若 styleHash 在 canonical 中有對應,則把 icon 檔名
//     remap 成 canonical 的對應檔名 (讓既有 constants 的 icon 對應仍正確);
//     若 styleHash 是新的 (canonical 沒有),則保留該來源自己的檔名
//   - 同一筆 (name + 座標) 在來源 2 以後若重複出現,只保留第一次
export function mergeKmlSources(sources) {
  if (!Array.isArray(sources) || sources.length === 0) return []

  const merged = []
  const folderByName = new Map() // name -> folder ref in merged
  const seenKeys = new Set()
  let canonicalIconMap = {}

  const upsertFolder = (name) => {
    let folder = folderByName.get(name)
    if (!folder) {
      folder = { name, features: [] }
      folderByName.set(name, folder)
      merged.push(folder)
    }
    return folder
  }

  sources.forEach((src, idx) => {
    if (!src?.xml) return
    const { folders, iconMap } = parseKmlWithMeta(src.xml)
    // tag 可以由來源個別指定 (loadKmlSources 會帶 tag);
    // 如果沒指定,預設規範: 第一個來源 = canonical 無 tag,其他 = s2/s3/...
    const tag = src.tag !== undefined ? src.tag : idx === 0 ? '' : `s${idx + 1}`
    // folderIndex 為「資料來源」識別碼 (來自 loadKmlSources);
    // 未帶時則使用來源順序作為 fallback。
    const sourceFolderIndex = src.folderIndex ?? idx + 1

    if (idx === 0) canonicalIconMap = iconMap

    for (const folder of folders) {
      const target = upsertFolder(folder.name)
      for (const f of folder.features) {
        const k = featureKey(f.properties.name, f.geometry.coordinates)
        if (seenKeys.has(k)) continue
        seenKeys.add(k)

        // 為每一筆 feature 註記「來源 folderIndex」,供 UI 顯示資料來源
        const withSource = (feat) => ({
          ...feat,
          properties: { ...feat.properties, sourceFolderIndex },
        })

        if (idx === 0) {
          target.features.push(withSource(f))
          continue
        }

        // 非規範來源:
        //   1. styleHash 在規範來源已知 → 把 icon 檔名 remap 回規範檔名
        //      (讓既有 constants/parking.js 的分類與 Firebase 覆寫資料仍正確)
        //   2. styleHash 是規範來源沒有的全新 icon → 加上來源 tag 前綴
        //      (e.g. "s2:icon-4.png"),避免與 S1 同檔名學的不同 icon 衰撞。
        //      這類新 icon 在 constants 中未被分類,只會出現在「全部」 filter 下。
        const hash = f.properties.styleHash
        const canonicalFile = hash ? canonicalIconMap[hash] : ''
        if (canonicalFile) {
          if (canonicalFile !== f.properties.icon) {
            target.features.push(
              withSource({
                ...f,
                properties: { ...f.properties, icon: canonicalFile },
              })
            )
          } else {
            target.features.push(withSource(f))
          }
        } else if (tag && f.properties.icon) {
          target.features.push(
            withSource({
              ...f,
              properties: { ...f.properties, icon: `${tag}:${f.properties.icon}` },
            })
          )
        } else {
          target.features.push(withSource(f))
        }
      }
    }
  })

  // 去掉沒有任何 feature 的資料夾 (理論上不會出現)
  return merged.filter((f) => f.features.length > 0)
}

export function resolveIconUrl(url) {
  if (!url) return ''
  if (url.match('http')) return url
  // url 可能是 "icon-5.png"、"s2:icon-5.png" 或含路徑。
  // 只在「沒有來源 tag 前綴」時才取檔名部分,以保留 "s2:" 這種 prefix。
  let key = url
  if (!/^[a-z0-9]+:/i.test(key)) {
    key = key.split('/').pop()
  }
  return ICON_URL_MAP[key] || ''
}
