import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'a',
    component: Layout,
    children: [
      {
        path: 'index',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/Index')
      }
    ]
  },
  {
    path: '/menu',
    component: Layout,
    redirect: '/menu/b',
    children: [
      {
        path: 'b',
        title: 'b',
        meta: { title: '菜单1-1' },
        name: '11',
        component: () => import ('@/views/a/b.vue')
      },
      {
        path: 'c',
        meta: { title: '菜单1-2' },
        title: "c",
        name: '22',
        component: () => import ('@/views/a/c.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'a',
    component: Layout,
    children: [
      {
        path: 'd',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/a/d.vue')
      }
    ]
  }
  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
