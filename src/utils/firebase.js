// Firebase 初始化 — Realtime Database 版
// 設定請放在 .env.local（不要 commit）：
//   VITE_FIREBASE_API_KEY=...
//   VITE_FIREBASE_AUTH_DOMAIN=...
//   VITE_FIREBASE_PROJECT_ID=...
//   VITE_FIREBASE_DATABASE_URL=https://xxx-default-rtdb.asia-southeast1.firebasedatabase.app
//   VITE_FIREBASE_STORAGE_BUCKET=...
//   VITE_FIREBASE_MESSAGING_SENDER_ID=...
//   VITE_FIREBASE_APP_ID=...
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

// 防呆:secret 若不小心夾雜換行 / 等號 / 逗號等雜訊,只取第一段乾淨值
const sanitize = (v) => {
  if (!v) return ''
  return String(v)
    .split(/[\r\n,=\s]/)[0]
    .trim()
}

const firebaseConfig = {
  apiKey: sanitize(import.meta.env.VITE_FIREBASE_API_KEY),
  authDomain: sanitize(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN),
  projectId: sanitize(import.meta.env.VITE_FIREBASE_PROJECT_ID),
  databaseURL: sanitize(import.meta.env.VITE_FIREBASE_DATABASE_URL),
  storageBucket: sanitize(import.meta.env.VITE_FIREBASE_STORAGE_BUCKET),
  messagingSenderId: sanitize(import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID),
  appId: sanitize(import.meta.env.VITE_FIREBASE_APP_ID),
}

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.databaseURL
)

let app = null
let rtdb = null

if (isFirebaseConfigured) {
  app = initializeApp(firebaseConfig)
  rtdb = getDatabase(app)
} else {
  // eslint-disable-next-line no-console
  console.warn(
    '[firebase] 找不到 VITE_FIREBASE_API_KEY 或 VITE_FIREBASE_DATABASE_URL，「共筆停車點」功能將停用。請於 .env.local 補上設定後重啟。'
  )
}

export { app, rtdb }
