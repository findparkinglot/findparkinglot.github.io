// Service Worker — 重機能停哪?
// 對 navigation（HTML）採 network-first，避免舊版 index.html 被快取卡住；
// 其餘 same-origin GET 用 cache-first。
const CACHE_NAME = 'penueling-v3'   // ← 每次部署有重大變動就 +1
const PRECACHE_URLS = ['./', './index.html', './manifest.json', './logo.png']

self.addEventListener('install', (e) => {
  self.skipWaiting()
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(PRECACHE_URLS)))
})

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  )
  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  const req = event.request
  if (req.method !== 'GET') return
  const url = new URL(req.url)
  if (url.origin !== self.location.origin) return

  // HTML 走 network-first，避免舊 index.html 被快取卡住
  if (req.mode === 'navigate' || req.destination === 'document') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone()
          caches.open(CACHE_NAME).then((c) => c.put(req, copy))
          return res
        })
        .catch(() => caches.match(req).then((r) => r || caches.match('./index.html')))
    )
    return
  }

  // 其餘資源 cache-first（hash 過的 JS/CSS/圖片本來就會換檔名，沒問題）
  event.respondWith(caches.match(req).then((res) => res || fetch(req)))
})