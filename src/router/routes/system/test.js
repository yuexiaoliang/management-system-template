export default [
  {
    path: '/page1',
    name: 'Page1',
    redirect: {
      name: 'Page2'
    },
    meta: {
      title: '测试菜单',
      icon: 'icon-sun'
    },

    children: [
      {
        path: 'page2',
        name: 'Page2',
        redirect: {
          name: 'Page3'
        },
        meta: {
          title: '二级菜单'
        },

        children: [
          {
            path: 'page3',
            name: 'Page3',
            meta: {
              title: '三级菜单'
            },
            component: () => import('@/views/page3/page3.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/page4',
    name: 'Page4',
    redirect: {
      name: 'Page4'
    },
    meta: {
      title: '又一个测试菜单',
      icon: 'icon-public'
    },

    children: [
      {
        path: 'page5',
        name: 'Page5',
        meta: {
          title: 'Page 5'
        },
        component: () => import('@/views/page2/page2.vue')
      },
      {
        path: 'page6',
        name: 'Page6',
        meta: {
          title: 'Page 6'
        },
        component: () => import('@/views/page3/page3.vue')
      }
    ]
  },
  {
    path: '/page7',
    name: 'Page7',
    meta: {
      title: 'Page 7',
      icon: 'icon-safe'
    },
    component: () => import('@/views/page3/page3.vue')
  }
]
