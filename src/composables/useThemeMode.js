import { ref, watch } from 'vue'
import { storage } from '@/utils/storage.js'

// 主題模式：dark / light
// 第一次進站若沒設定過會依 prefers-color-scheme 自動判斷
export function useThemeMode() {
  const stored = storage.get('themeMode')
  const initial =
    stored ||
    (window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark')

  const mode = ref(initial)

  const apply = (m) => {
    document.body.classList.toggle('light-theme', m === 'light')
    document.body.classList.toggle('dark-theme', m !== 'light')
  }

  apply(mode.value)

  watch(mode, (val) => {
    storage.set('themeMode', val)
    apply(val)
  })

  return { mode }
}
