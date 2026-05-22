import { createApp } from 'vue'
import App from './App.vue'
import 'material-icons/iconfont/material-icons.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import './style.css'

createApp(App).mount('#app')

// 註冊 Service Worker（PWA 離線快取）
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register(`${import.meta.env.BASE_URL}serviceWorker.js`)
      .catch(() => {
        /* 註冊失敗不影響網站使用 */
      })
  })
}
