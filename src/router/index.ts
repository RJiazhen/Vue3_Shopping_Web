// 引入Vue-router
import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes'

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPositoin) {
    return { top: 0 }
  }
})

export default router
