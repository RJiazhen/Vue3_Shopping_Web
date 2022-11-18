// 引入Vue-router
import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes'
import { useUser } from "@/stores/user"

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPositoin) {
    return { top: 0 }
  },
})

// 路由守卫，每次路由跳转时都会执行
router.beforeEach(async (to, from) => {
  const user = useUser()
  let token = user.token
  let userName = user?.userInfo?.name
  if (token) {
    // 已经登录的情况下
    if (to.name == 'login') {
    // 想进入登录页面则直接重定向到主页
      return { name: 'home' }
    }
    // 如果去其他页面，则先判断是否已经有用户信息了
    else {
      if (!userName) {
        // 如果没有则先获取用户信息
        try {
          await user.getUserInfo()
        } catch (error) {
          // 如果无法获取用户信息，则可能是token过期，所以执行登出操作，并且让用户重新登录
          await user.userLogout()
          return { name: 'login' }
        }
      }
    }
  }
})

export default router
