import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import content from '@originjs/vite-plugin-content'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.kml'],
  plugins: [
    vue(),
    content()
  ],
  server: {
    port: "9000",
    // cors: true,
    // proxy: {
    //   "/dev": {
    //     target: "https://popdf-403908.de.r.appspot.com",
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/dev/, ""),
    //   },
    // },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "./",
})
