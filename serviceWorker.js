// Service Worker — 重機能停哪?
// 採用 cache-first，並在每次 install 時跳過等待
const CACHE_NAME = 'penueling-v2'
const PRECACHE_URLS = ['./', './index.html', './manifest.json', './logo.png']

self.addEventListener('install', (e) => {
  self.skipWaiting()
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)))
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
  // 只快取 GET，避免攔截 mapbox 等動態請求
  if (req.method !== 'GET') return
  const url = new URL(req.url)
  if (url.origin !== self.location.origin) return

  event.respondWith(
    caches.match(req).then((res) => res || fetch(req))
  )
})
