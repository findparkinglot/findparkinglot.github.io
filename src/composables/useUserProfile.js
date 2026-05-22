// 使用者本機檔案：未登入情況下的識別與暱稱
import { ref, watch } from 'vue'
import { storage } from '@/utils/storage.js'

const ID_KEY = 'community_user_id'
const NICK_KEY = 'community_user_nickname'

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

watch(nickname, (v) => storage.set(NICK_KEY, v || ''))

export function useUserProfile() {
  const displayName = () => nickname.value?.trim() || `匿名#${userId}`
  return {
    userId,
    nickname,
    displayName,
  }
}
