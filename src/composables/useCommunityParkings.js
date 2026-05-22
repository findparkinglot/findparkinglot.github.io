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
    await update(newRef, {
      name: payload.name?.trim() || '',
      description: payload.description?.trim() || '',
      iconKey: payload.iconKey || 'icon-3.png',
      category: payload.category || '',
      friendliness: payload.friendliness || '',
      priceInfo: payload.priceInfo?.trim() || '',
      lng: Number(lng),
      lat: Number(lat),
      createdBy: { id: user.id, nickname: user.nickname || '' },
      createdAt: serverTimestamp(),
      updatedBy: { id: user.id, nickname: user.nickname || '' },
      updatedAt: serverTimestamp(),
    })
    return newRef.key
  }

  const updateParking = async (id, payload, user) => {
    if (!isFirebaseConfigured) throw new Error('Firebase 尚未設定')
    const patch = {
      updatedBy: { id: user.id, nickname: user.nickname || '' },
      updatedAt: serverTimestamp(),
    }
    if (payload.name !== undefined) patch.name = payload.name?.trim() || ''
    if (payload.description !== undefined)
      patch.description = payload.description?.trim() || ''
    if (payload.iconKey !== undefined) patch.iconKey = payload.iconKey
    if (payload.category !== undefined) patch.category = payload.category
    if (payload.friendliness !== undefined) patch.friendliness = payload.friendliness
    if (payload.priceInfo !== undefined) patch.priceInfo = payload.priceInfo?.trim() || ''
    if (payload.coordinates) {
      const [lng, lat] = payload.coordinates
      patch.lng = Number(lng)
      patch.lat = Number(lat)
    }
    return update(dbRef(rtdb, `${NODE}/${id}`), patch)
  }

  const deleteParking = async (id) => {
    if (!isFirebaseConfigured) throw new Error('Firebase 尚未設定')
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
