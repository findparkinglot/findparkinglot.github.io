// 簡易 Google Analytics (gtag) 包裝
// - 若 window.gtag 尚未載入(例如被 AdBlock 擋),呼叫不會出錯
// - 統一介面方便日後抽換

const hasGtag = () => typeof window !== 'undefined' && typeof window.gtag === 'function'

/**
 * 送出自訂事件
 * @param {string} eventName 事件名稱 (建議 snake_case)
 * @param {object} [params] 事件參數
 */
export const track = (eventName, params = {}) => {
  if (!hasGtag()) return
  try {
    window.gtag('event', eventName, params)
  } catch {
    /* noop */
  }
}

/**
 * 手動送 page_view (SPA 內部切換時用)
 * @param {string} [path] 預設為 location.pathname + search
 * @param {string} [title] 預設為 document.title
 */
export const trackPageView = (path, title) => {
  if (!hasGtag()) return
  try {
    window.gtag('event', 'page_view', {
      page_path: path || window.location.pathname + window.location.search,
      page_title: title || document.title,
      page_location: window.location.href,
    })
  } catch {
    /* noop */
  }
}
