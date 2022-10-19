// 引入创建vue app需要的组件
import { createApp } from 'vue'
import App from './App.vue'

// 引入pinia和路由
import { createPinia } from 'pinia'
import router from '@/router'
// 引入并执行模拟数据的mock
import "@/mock/mockServer"

// 引入初始化样式和element
import './assets/reset.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 创建app
const app = createApp(App)

// 挂载elementIcon到app上
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 挂在路由和store
app.use(router).use(createPinia()).mount('#app')
