// 使用者本機檔案：未登入情況下的識別與暱稱
import { ref, watch } from 'vue'
import { storage } from '@/utils/storage.js'

const ID_KEY = 'community_user_id'
const NICK_KEY = 'community_user_nickname'
const ADMIN_OVERRIDE_KEY = 'community_is_admin' // localStorage 作為個人裝置的站方標記

// 站方管理者的 userId 清單,透過 .env.local 設定
// VITE_ADMIN_USER_IDS=xxxx-xxxx,yyyy-yyyy
const ADMIN_IDS = String(import.meta.env.VITE_ADMIN_USER_IDS || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean)

function genId() {
  // 8 碼 hex,如 'a3b2-c4d5',足夠區分一般使用者
  const rand = (n) =>
    Array.from(crypto.getRandomValues(new Uint8Array(n)))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('')
  return `${rand(2)}-${rand(2)}`
}

let cachedId = storage.get(ID_KEY)
if (!cachedId) {
  cachedId = genId()
  storage.set(ID_KEY, cachedId)
}

const userId = cachedId
const nickname = ref(storage.get(NICK_KEY) || '')

// isAdmin 判定：
//  1. userId 在 VITE_ADMIN_USER_IDS 中
//  2. 或者 localStorage[community_is_admin] === '1' (沒設 env 時的手動個人設定)
const isAdmin =
  ADMIN_IDS.includes(userId) || storage.get(ADMIN_OVERRIDE_KEY) === '1'

watch(nickname, (v) => storage.set(NICK_KEY, v || ''))

export function useUserProfile() {
  const displayName = () => nickname.value?.trim() || `匿名#${userId}`
  return {
    userId,
    nickname,
    displayName,
    isAdmin,
  }
}
