// 引入创建vue app需要的组件
import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia' // store
import router from '@/router' // 路由
import mitt from "mitt" // 全局事件总线
import "@/mock/mockServer" // 引入并执行模拟数据的mock
import './assets/reset.css' //初始化样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue' // Element图标

const app = createApp(App)

// 挂载elementIcon到app上
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 挂载全局事件总线
app.config.globalProperties.$bus = mitt()

// 挂载路由和store，并且加载
app.use(router).use(createPinia()).mount('#app')
