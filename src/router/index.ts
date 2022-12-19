// 引入Vue-router
import { createRouter, createWebHistory, useRoute } from 'vue-router'
import routes from '@/router/routes'
import { useUser } from "@/stores/user"

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPositoin) {
    return { top: 0 }
  },
})
// FIXME 修复添加#后路由无法正常跳转的问题
// 路由守卫，每次路由跳转时都会执行
router.beforeEach(async (to, from) => {
  const user = useUser()
  let token = user.token
  let userName = user?.userInfo?.name
  // 已经登录的情况下
  if (token) {
    // 想进入登录页面则直接重定向到主页
    if (to.name == 'login') {
      return { name: 'home' }
    }
    // 如果去其他页面
    else {
      // 如果没有用户名则先获取用户信息
      if (!userName) {
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
  // 未登录的情况下
  else {
    // 如果路径中包括以下字符，则重定向到Login
    const justLoginPaths = ['center', 'trade', 'pay']
    let allowPass = true // 是否放行的变量
    justLoginPaths.forEach((item) => {
      to.path.indexOf(item) != -1 ? allowPass = false : null
    })
    if (!allowPass) {
      const redirectPath = to.path.indexOf('trade') != -1 ? 'cart' : to.path
      // 把原先打算去的路径保存在query参数中
      return { name: 'login', query: { redirect: redirectPath } }
    }
  }
})

export default router
