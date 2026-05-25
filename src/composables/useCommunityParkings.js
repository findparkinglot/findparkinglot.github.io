// 社群停車場 CRUD + 即時訂閱 (Realtime Database 版)
// RTDB 結構：
//   /community_parkings/{autoKey}:
//     name: string
//     description: string
//     iconKey: string                e.g. 'icon-3.png'
//     category: string
//     friendliness: string
//     priceInfo: string
//     lng: number
//     lat: number
//     createdBy: { id, nickname }
//     createdAt: serverTimestamp (number, ms)
//     updatedBy: { id, nickname }
//     updatedAt: serverTimestamp (number, ms)
//     history/{historyAutoKey}:
//       action:   'create' | 'update' | 'delete'
//       at:       serverTimestamp
//       by:       { id, nickname }
//       snapshot: 本次變動內容
//                   - create: 完整新增資料
//                   - update: 只含本次改動的欄位
//                   - delete: 刪除前的快照
import { ref, onMounted, onBeforeUnmount } from 'vue'
import {
  ref as dbRef,
  push,
  update,
  remove,
  onValue,
  off,
  serverTimestamp,
  query,
  orderByChild,
} from 'firebase/database'
import { rtdb, isFirebaseConfigured } from '@/utils/firebase.js'

const NODE = 'community_parkings'

// 模組層級單例，所有元件共用同一份 reactive list
const items = ref([])
const ready = ref(false)
const error = ref(null)
let listenerRef = null
let subscribers = 0

function startSubscribe() {
  if (!isFirebaseConfigured || listenerRef) return
  try {
    const q = query(dbRef(rtdb, NODE), orderByChild('updatedAt'))
    listenerRef = q
    onValue(
      q,
      (snap) => {
        const list = []
        snap.forEach((child) => {
          const data = child.val() || {}
          list.push({
            id: child.key,
            name: data.name || '',
            description: data.description || '',
            iconKey: data.iconKey || 'icon-3.png',
            category: data.category || '',
            friendliness: data.friendliness || '',
            priceInfo: data.priceInfo || '',
            coordinates: [data.lng ?? null, data.lat ?? null],
            createdBy: data.createdBy || null,
            updatedBy: data.updatedBy || null,
            createdAt: data.createdAt || null,
            updatedAt: data.updatedAt || null,
            // history: RTDB 上是 { autoKey: entry } 物件
            // 這裡轉成「最新在前」的陣列供 UI 使用
            history: historyMapToArray(data.history),
          })
        })
        // orderByChild 結果是升冪，反轉成最新在前
        items.value = list.reverse()
        ready.value = true
      },
      (err) => {
        // eslint-disable-next-line no-console
        console.error('[community] rtdb error', err)
        error.value = err
      }
    )
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('[community] subscribe failed', e)
    error.value = e
  }
}

function stopSubscribe() {
  if (listenerRef) {
    off(listenerRef)
    listenerRef = null
  }
}

// 將 RTDB 的 history 物件 ({ autoKey: entry, ... })
// 轉成「最新在前」的陣列。push() 的 autoKey 本身按時間升冪排序。
function historyMapToArray(histObj) {
  if (!histObj || typeof histObj !== 'object') return []
  return Object.entries(histObj)
    .map(([k, v]) => ({ ...(v || {}), _key: k }))
    .sort((a, b) => (a._key < b._key ? 1 : a._key > b._key ? -1 : 0))
}

export function useCommunityParkings() {
  onMounted(() => {
    subscribers += 1
    startSubscribe()
  })
  onBeforeUnmount(() => {
    subscribers -= 1
    if (subscribers <= 0) stopSubscribe()
  })

  const addParking = async (payload, user) => {
    if (!isFirebaseConfigured) throw new Error('Firebase 尚未設定')
    const [lng, lat] = payload.coordinates
    const newRef = push(dbRef(rtdb, NODE))
    const id = newRef.key
    const by = { id: user.id, nickname: user.nickname || '' }
    const record = {
      name: payload.name?.trim() || '',
      description: payload.description?.trim() || '',
      iconKey: payload.iconKey || 'icon-3.png',
      category: payload.category || '',
      friendliness: payload.friendliness || '',
      priceInfo: payload.priceInfo?.trim() || '',
      lng: Number(lng),
      lat: Number(lat),
      createdBy: by,
      createdAt: serverTimestamp(),
      updatedBy: by,
      updatedAt: serverTimestamp(),
    }
    // 主資料 + 歷史紀錄 (同一次 update,避免不一致)
    const historyKey = push(dbRef(rtdb, `${NODE}/${id}/history`)).key
    await update(dbRef(rtdb), {
      [`${NODE}/${id}`]: {
        ...record,
        history: {
          [historyKey]: {
            action: 'create',
            at: serverTimestamp(),
            by,
            snapshot: record,
          },
        },
      },
    })
    return id
  }

  const updateParking = async (id, payload, user) => {
    if (!isFirebaseConfigured) throw new Error('Firebase 尚未設定')
    const by = { id: user.id, nickname: user.nickname || '' }
    const current = items.value.find((it) => it.id === id) || {}
    // 把 payload 攤平成同層欄位 (coordinates → lng / lat)
    const incoming = {}
    if (payload.name !== undefined) incoming.name = payload.name?.trim() || ''
    if (payload.description !== undefined)
      incoming.description = payload.description?.trim() || ''
    if (payload.iconKey !== undefined) incoming.iconKey = payload.iconKey
    if (payload.category !== undefined) incoming.category = payload.category
    if (payload.friendliness !== undefined) incoming.friendliness = payload.friendliness
    if (payload.priceInfo !== undefined) incoming.priceInfo = payload.priceInfo?.trim() || ''
    if (payload.coordinates) {
      const [lng, lat] = payload.coordinates
      incoming.lng = Number(lng)
      incoming.lat = Number(lat)
    }
    // 只挑出真正有變動的欄位
    const before = {}
    const after = {}
    for (const k of Object.keys(incoming)) {
      let prev
      if (k === 'lng') prev = current.coordinates?.[0]
      else if (k === 'lat') prev = current.coordinates?.[1]
      else prev = current[k]
      const prevNorm = prev === undefined || prev === null ? '' : prev
      const nextNorm = incoming[k] === undefined || incoming[k] === null ? '' : incoming[k]
      if (prevNorm !== nextNorm) {
        before[k] = prev ?? ''
        after[k] = incoming[k]
      }
    }
    const patch = {
      ...incoming,
      updatedBy: by,
      updatedAt: serverTimestamp(),
    }
    // multi-path update:同時寫主資料 + push 一筆歷史
    const historyKey = push(dbRef(rtdb, `${NODE}/${id}/history`)).key
    const updates = {}
    for (const k of Object.keys(patch)) {
      updates[`${NODE}/${id}/${k}`] = patch[k]
    }
    updates[`${NODE}/${id}/history/${historyKey}`] = {
      action: 'update',
      at: serverTimestamp(),
      by,
      before,
      after,
    }
    return update(dbRef(rtdb), updates)
  }

  const deleteParking = async (id /*, user */) => {
    if (!isFirebaseConfigured) throw new Error('Firebase 尚未設定')
    // 直接將整個項目刪除 (含 history)。
    // multi-path update 不能同時指定父/子路徑，所以不再 push delete 的 history entry。
    return remove(dbRef(rtdb, `${NODE}/${id}`))
  }

  return {
    items,
    ready,
    error,
    addParking,
    updateParking,
    deleteParking,
  }
}
