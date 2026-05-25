// 官方停車點覆寫資訊 (Realtime Database 版)
//
// 目的：不修改官方 (KML) 資料的前提下，讓車友能對「同一個官方地點」
//       套上一層覆寫（如：實際費率、補充說明…）。
//       讀取時若某官方點存在覆寫，就以覆寫資料優先顯示。
//
// RTDB 結構：
//   /parking_overrides/{safeKey}:
//     origName:    string                    // 原始官方名稱 (備查用)
//     origLng:     number                    // 原始官方經度
//     origLat:     number                    // 原始官方緯度
//     name?:       string                    // 覆寫後名稱 (空字串表示不覆寫)
//     description?:string                    // 覆寫後說明
//     iconKey?:    string                    // 覆寫後 icon 檔名
//     category?:   string                    // 覆寫後類別 (對應 parkingTypeList.value)
//     friendliness?:string                   // 覆寫後友善程度 (對應 degreeOfFriendlinessList.value)
//     priceInfo?:  string                    // 覆寫後價格字串
//     updatedBy:   { id, nickname }
//     updatedAt:   serverTimestamp
//
//   /parking_overrides/{safeKey}/history/{autoKey}:
//     action:   'override' | 'reset'
//     at:       serverTimestamp
//     by:       { id, nickname }
//     snapshot: 本次變動內容
//                 - override: 寫入的完整覆寫資料 (不含 name)
//                 - reset:    重設前的快照 (可能為 null)
//
// safeKey 規則：`${name}|${lng(6位小數)},${lat(6位小數)}`並將禁用字元換為 '_'。
import { ref, onMounted, onBeforeUnmount } from 'vue'
import {
  ref as dbRef,
  push,
  update,
  remove,
  onValue,
  off,
  serverTimestamp,
} from 'firebase/database'
import { rtdb, isFirebaseConfigured } from '@/utils/firebase.js'

const NODE = 'parking_overrides'

// 模組層級單例
const overrides = ref({}) // { [safeKey]: overrideObject }
const ready = ref(false)
const error = ref(null)
let listenerRef = null
let subscribers = 0

/**
 * 將 (name, [lng, lat]) 轉成穩定且符合 RTDB 路徑規則的 key。
 * 注意：座標一律取 6 位小數，必須與 favoriteId() 相同精度，
 *       避免「同一官方點」因浮點顯示差異而被當成兩個 key。
 */
export function overrideKey(name, geometry) {
  if (!name || !Array.isArray(geometry)) return ''
  const lng = Number(geometry[0])
  const lat = Number(geometry[1])
  if (!isFinite(lng) || !isFinite(lat)) return ''
  const raw = `${name}|${lng.toFixed(6)},${lat.toFixed(6)}`
  // RTDB key 禁止字元：. # $ [ ] /
  return raw.replace(/[.#$/[\]]/g, '_')
}

/**
 * 將官方原始資料與覆寫物件合併。覆寫欄位若為「字串且為空」一律忽略
 * （保留原值），以避免覆寫物件殘留空欄位時把官方資訊洗成空白。
 */
export function applyOverride(original, override) {
  if (!override) return original
  const merged = { ...original }
  const pick = (k) => {
    const v = override[k]
    if (v === undefined || v === null) return
    if (typeof v === 'string' && v.trim() === '') return
    merged[k] = v
  }
  // 注意:官方名稱「不」可被覆寫,避免混淆 / 搜尋對不上 / 惡意改名,
  //      故這裡刻意不 pick('name')。
  pick('description')
  pick('iconKey')
  pick('category')
  pick('friendliness')
  pick('priceInfo')
  return merged
}

function startSubscribe() {
  if (!isFirebaseConfigured || listenerRef) return
  try {
    const ref = dbRef(rtdb, NODE)
    listenerRef = ref
    onValue(
      ref,
      (snap) => {
        const map = {}
        snap.forEach((child) => {
          map[child.key] = child.val() || {}
        })
        overrides.value = map
        ready.value = true
      },
      (err) => {
        // eslint-disable-next-line no-console
        console.error('[parking-overrides] rtdb error', err)
        error.value = err
      }
    )
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('[parking-overrides] subscribe failed', e)
    error.value = e
  }
}

function stopSubscribe() {
  if (listenerRef) {
    off(listenerRef)
    listenerRef = null
  }
}

export function useParkingOverrides() {
  onMounted(() => {
    subscribers += 1
    startSubscribe()
  })
  onBeforeUnmount(() => {
    subscribers -= 1
    if (subscribers <= 0) stopSubscribe()
  })

  /** 取得某官方點目前的覆寫 (沒有則回傳 null) */
  const getOverride = (name, geometry) => {
    const key = overrideKey(name, geometry)
    if (!key) return null
    return overrides.value[key] || null
  }

  /** 是否存在覆寫 */
  const hasOverride = (name, geometry) => Boolean(getOverride(name, geometry))

  /** 取得某官方點的歷史修改陣列(最新在前) */
  const getOverrideHistory = (name, geometry) => {
    const ov = getOverride(name, geometry)
    if (!ov || !ov.history || typeof ov.history !== 'object') return []
    return Object.entries(ov.history)
      .map(([k, v]) => ({ ...(v || {}), _key: k }))
      .sort((a, b) => (a._key < b._key ? 1 : a._key > b._key ? -1 : 0))
  }

  /**
   * 寫入或更新覆寫。為了能在介面上顯示「車友修改的內容」，
   * 同時也會回寫 origName / origLng / origLat 作為備查。
   */
  const upsertOverride = async (original, payload, user) => {
    if (!isFirebaseConfigured) throw new Error('Firebase 尚未設定')
    const key = overrideKey(original.name, original.geometry)
    if (!key) throw new Error('無法產生 override key (缺少 name 或 geometry)')
    const [lng, lat] = original.geometry
    const by = { id: user.id, nickname: user.nickname || '' }
    // 名稱刻意不寫入:官方點的名稱不允許被車友覆寫
    const record = {
      origName: original.name || '',
      origLng: Number(lng),
      origLat: Number(lat),
      description:
        typeof payload.description === 'string' ? payload.description.trim() : '',
      iconKey: payload.iconKey || '',
      category: payload.category || '',
      friendliness: payload.friendliness || '',
      priceInfo:
        typeof payload.priceInfo === 'string' ? payload.priceInfo.trim() : '',
      updatedBy: by,
      updatedAt: serverTimestamp(),
    }
    // 計算 diff:跟「目前顯示給使用者的內容」(套用既有覆寫後的官方資料) 比對。
    // 這樣使用者看到歷史時,「舊值」會是他在編輯前看到的值,最直覺。
    const prev = overrides.value[key] || null
    const baseline = applyOverride(original, prev) // 與編輯前畫面同步
    const DIFF_FIELDS = ['description', 'iconKey', 'category', 'friendliness', 'priceInfo']
    const before = {}
    const after = {}
    for (const k of DIFF_FIELDS) {
      const prevVal = baseline?.[k] ?? ''
      const nextVal = record[k] ?? ''
      if (String(prevVal) !== String(nextVal)) {
        before[k] = prevVal
        after[k] = nextVal
      }
    }
    // 主資料 + 歷史 同一次交易
    const historyKey = push(dbRef(rtdb, `${NODE}/${key}/history`)).key
    await update(dbRef(rtdb), {
      [`${NODE}/${key}`]: {
        ...record,
        history: {
          ...(overrides.value[key]?.history || {}),
          [historyKey]: {
            action: 'override',
            at: serverTimestamp(),
            by,
            before,
            after,
          },
        },
      },
    })
    return key
  }

  /** 重設 (移除) 覆寫，恢復顯示原始官方資料 */
  const resetOverride = async (name, geometry /*, user */) => {
    if (!isFirebaseConfigured) throw new Error('Firebase 尚未設定')
    const key = overrideKey(name, geometry)
    if (!key) return
    // 直接把整個 override 節點移除 (含 history)。
    // multi-path update 不能同時指定「父路徑」與「子路徑」，所以不再 push
    // 「即將被刪掉的」reset history entry。
    await remove(dbRef(rtdb, `${NODE}/${key}`))
  }

  return {
    overrides,
    ready,
    error,
    getOverride,
    hasOverride,
    getOverrideHistory,
    upsertOverride,
    resetOverride,
  }
}
