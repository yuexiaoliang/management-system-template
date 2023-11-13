import home from '../home'

import other from './other'
import test from './test'

const route = {
  path: '/system',
  name: 'System',
  component: () => import('@/layout/system-layout.vue'),

  children: [home, ...test, ...other]
}

export const siderMenus = route.children

export default route
