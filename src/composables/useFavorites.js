// 我的最愛停車場：使用 localStorage 持久化
// id 規則：`${name}|${lng},${lat}`，避免同名地點衝突
import { ref, computed } from 'vue'
import { storage } from '@/utils/storage.js'

const STORAGE_KEY = 'favorites_v1'

export function favoriteId(name, geometry) {
  if (!name || !geometry) return ''
  const lng = Number(geometry[0]).toFixed(6)
  const lat = Number(geometry[1]).toFixed(6)
  return `${name}|${lng},${lat}`
}

// 模組層級單例，多元件共享同一份狀態
const favorites = ref(storage.getJSON(STORAGE_KEY, []) || [])

const persist = () => storage.setJSON(STORAGE_KEY, favorites.value)

export function useFavorites() {
  const favoriteIdSet = computed(() => new Set(favorites.value.map((f) => f.id)))

  const isFavorite = (id) => favoriteIdSet.value.has(id)

  const toggleFavorite = (item) => {
    // item: { id, name, parkingType, geometry, address, icon }
    if (!item?.id) return
    const idx = favorites.value.findIndex((f) => f.id === item.id)
    if (idx >= 0) {
      favorites.value.splice(idx, 1)
    } else {
      favorites.value.push({
        id: item.id,
        name: item.name,
        parkingType: item.parkingType || '',
        geometry: item.geometry,
        address: item.address || '',
        icon: item.icon || '',
        addedAt: Date.now(),
      })
    }
    persist()
  }

  const removeFavorite = (id) => {
    const idx = favorites.value.findIndex((f) => f.id === id)
    if (idx >= 0) {
      favorites.value.splice(idx, 1)
      persist()
    }
  }

  return {
    favorites,
    favoriteIdSet,
    isFavorite,
    toggleFavorite,
    removeFavorite,
  }
}
