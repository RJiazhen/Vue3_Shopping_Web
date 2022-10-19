import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  // npm run dev 启动时会自动打开浏览器，且设置默认路径
  server: {
    host: '127.0.0.1',
    port: 3000,
    open: '/search',
    // 配置代理跨域
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
        changeOrigin: true,
      }
    }
  }
})
