import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import content from '@originjs/vite-plugin-content'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.kml'],
  plugins: [vue(), content()],
  server: {
    port: 9000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: './',
  esbuild: {
    // 正式環境移除所有 console / debugger，降低 bundle 體積
    drop: ['console', 'debugger'],
  },
  build: {
    target: 'es2018',
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          mapbox: ['mapbox-gl'],
          vendor: ['vue', 'axios'],
        },
      },
    },
  },
})
