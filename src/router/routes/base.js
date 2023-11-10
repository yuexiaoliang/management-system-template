export default [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      skipLogin: true
    },
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/:chapters(.*)*',
    name: 'NotFound',
    meta: {
      title: '404',
      skipLogin: true
    },
    component: () => import('@/views/not-found/not-found.vue')
  }
]
