// 引入Vue-router
import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes'
import {useUser} from "@/stores/user"

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPositoin) {
    return { top: 0 }
  },
})

// 路由守卫，每次路由跳转时都会执行
router.beforeEach((to, from)=>{
  const user = useUser()
  let token = user.token
  let userInfo = user.userInfo
  if (token) {
    if(to.name=='login'){
      return {name:'home'}
    }
    else{}
  }
})

export default router
