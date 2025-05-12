import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import { loadLayout } from '@/middleware'

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/pages/index.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('@/pages/users/index.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/pages/auth/index.vue'),
    meta: {
      layout: 'empty'
    }
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach(loadLayout)
