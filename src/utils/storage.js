// 安全的 localStorage 包裝（隱私模式、Safari 私密瀏覽會丟例外）
export const storage = {
  get(key, fallback = null) {
    try {
      const v = window.localStorage.getItem(key)
      return v === null ? fallback : v
    } catch {
      return fallback
    }
  },
  set(key, value) {
    try {
      window.localStorage.setItem(key, value)
      return true
    } catch {
      return false
    }
  },
  remove(key) {
    try {
      window.localStorage.removeItem(key)
    } catch {
      /* noop */
    }
  },
}
