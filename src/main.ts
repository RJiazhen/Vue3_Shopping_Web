import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'

import router from '@/router'

import './assets/reset.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)


// 挂载elementIcon到app上
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 挂在路由和store
app.use(router).use(createPinia()).mount('#app')
