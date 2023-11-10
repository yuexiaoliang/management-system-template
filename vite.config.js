import { fileURLToPath, URL } from 'node:url'

import { vitePluginForArco } from '@arco-plugins/vite-vue'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import pxToVw from 'postcss-px-to-viewport'
import { defineConfig } from 'vite'

export const VIEWPORT_WIDTH = 1920

// 开发阶段的服务器地址
export const SERVER_URL = 'http://127.0.0.1:3000'

export default defineConfig({
  plugins: [
    vue(),
    jsx(),
    vitePluginForArco({
      style: 'css'
    })
  ],

  server: {
    host: '0.0.0.0',
    port: 8800,
    proxy: {
      '/api': {
        target: SERVER_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  },

  css: {
    postcss: {
      plugins: [
        pxToVw({
          unitToConvert: 'vpx',
          viewportWidth: VIEWPORT_WIDTH
        })
      ]
    },
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/index.scss";'
      }
    }
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks
      }
    },
    chunkSizeWarningLimit: 1024 * 2
  }
})

function manualChunks(id) {
  const arr = ['@vueuse/core', '@arco-design/web-vue']
  for (const item of arr) {
    if (typeof item === 'string') {
      if (id.includes(item)) return item
    }

    if (Array.isArray(item)) {
      const [key, val] = item
      if (id.includes(key)) return val
    }
  }

  if (id.includes('node_modules')) return 'vendor'
}
