import other from './other'
import test from './test'

const route = {
  path: '/system',
  name: 'System',
  component: () => import('@/layout/system-layout.vue'),

  children: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/home/home.vue'),
      meta: {
        title: '首页',
        icon: 'icon-home'
      }
    },
    ...test,
    ...other
  ]
}

export const siderMenus = route.children

export default route
