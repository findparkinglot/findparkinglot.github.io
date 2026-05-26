// 自動更新官方 KML 圖資 (Alan 大重停車記事 - Google My Maps)
//
// 流程:
//   1. 從 Google My Maps 下載 KMZ (本質是 ZIP,內含 doc.kml + images/*.png)
//   2. 清空目標資料夾的舊內容 (doc.kml / doc.xml / images/)
//   3. 解壓 KMZ 內所有檔案到目標資料夾
//   4. 將 doc.kml 複製一份為 doc.xml (Vite 的 import.meta.glob 抓 doc.xml)
//
// 用法:
//   npm run update:kml
//
// 也會被 .github/workflows/update-kml.yml 排程觸發 (每週一 02:00 台灣時間)。

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import AdmZip from 'adm-zip'

const MID = '1ORD5DnL6yqrCrtQJYB9TeTgOOlvo-Yc'
const KMZ_URL = `https://www.google.com/maps/d/kml?mid=${MID}`

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, '..')
const TARGET = path.join(
  REPO_ROOT,
  'src', 'assets', 'MapData', 'My Maps', 'PackingMarkerList2'
)

async function main() {
  console.log(`[update-kml] fetching ${KMZ_URL}`)
  const res = await fetch(KMZ_URL, { redirect: 'follow' })
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} ${res.statusText}`)
  }
  const buf = Buffer.from(await res.arrayBuffer())
  console.log(`[update-kml] downloaded ${buf.length} bytes`)

  // 簡單檢查:KMZ/ZIP 檔頭必為 "PK\x03\x04"
  if (buf.length < 4 || buf[0] !== 0x50 || buf[1] !== 0x4b) {
    throw new Error('Downloaded file is not a valid ZIP/KMZ (missing PK header)')
  }

  // 確保目標資料夾存在,並清掉舊的 doc.* 與 images/
  fs.mkdirSync(TARGET, { recursive: true })
  fs.rmSync(path.join(TARGET, 'images'), { recursive: true, force: true })
  for (const f of ['doc.kml', 'doc.xml']) {
    fs.rmSync(path.join(TARGET, f), { force: true })
  }

  // 解壓 KMZ 內所有檔案到 TARGET
  const zip = new AdmZip(buf)
  zip.extractAllTo(TARGET, /* overwrite */ true)
  console.log('[update-kml] extracted KMZ to', TARGET)

  // doc.kml → doc.xml (Vite glob 抓 doc.xml)
  const docKml = path.join(TARGET, 'doc.kml')
  const docXml = path.join(TARGET, 'doc.xml')
  if (!fs.existsSync(docKml)) {
    throw new Error('doc.kml not found in extracted KMZ')
  }
  fs.copyFileSync(docKml, docXml)
  console.log('[update-kml] copied doc.kml -> doc.xml')

  // 寫入「地圖資料更新」時間戳 (YYMMDD,台灣時區),供 SettingsPanel.vue 顯示
  const stampPath = path.join(REPO_ROOT, 'src', 'constants', 'dataUpdateDate.js')
  const stamp = formatYymmddTaipei(new Date())
  const stampContent =
    '// 由 scripts/update-kml.mjs 自動產生 — 請勿手動編輯。\n' +
    '// 格式 YYMMDD,例如 260525 = 2026-05-25。\n' +
    `export const MAP_DATA_UPDATED_AT = '${stamp}'\n`
  fs.writeFileSync(stampPath, stampContent, 'utf8')
  console.log(`[update-kml] wrote ${stampPath} = ${stamp}`)

  console.log('[update-kml] ✅ done')
}

// 取 Asia/Taipei 當下的 YYMMDD
function formatYymmddTaipei(date) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Taipei',
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date)
  const get = (t) => parts.find((p) => p.type === t)?.value ?? ''
  return `${get('year')}${get('month')}${get('day')}`
}

main().catch((err) => {
  console.error('[update-kml] ❌ failed:', err)
  process.exit(1)
})
