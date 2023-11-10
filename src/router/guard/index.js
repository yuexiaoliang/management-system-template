import { storeToRefs } from 'pinia'

import NProgress from 'nprogress'

import { useUserStore } from '@/stores/user'

import { setRouteEmitter } from '../listener'

const setupRouterGuard = (router) => {
  // 路由前置守卫
  router.beforeEach((to, from) => {
    setRouteEmitter(to)

    NProgress.start()

    const user = useUserStore()
    const { isLogin } = storeToRefs(user)

    const { meta } = to
    const { skipLogin } = meta || {}

    if (!skipLogin && !isLogin.value) {
      return {
        name: 'Home',
        replace: true
      }
    }

    return true
  })

  // 路由后置守卫
  router.afterEach(() => {
    NProgress.done()
  })
}

export default setupRouterGuard
