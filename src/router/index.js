import { createRouter, createWebHistory } from 'vue-router'

import setupRouterGuard from './guard'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 路由守卫
setupRouterGuard(router)

export default router
