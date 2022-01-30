import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BasicLayout from '../layout/BasicLayout.vue';
import LoginLayout from '@/layout/LoginLayout.vue';
import Home from '@/views/home/Home.vue'
import User from '@/views/home/User.vue'
import Sort from '@/views/home/Sort.vue'
import Span from '@/views/home/Span.vue'
import Arch from '@/views/home/Arch.vue'
import Admin from '@/views/home/Admin.vue'
import Login from '@/views/login/index.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Base',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: BasicLayout,
    children: [
      {
        path: '/home',
        name: 'Index',
        component: Home
      },
      {
        path: '/home/user',
        component: User,
      },
      {
        path: '/home/sort',
        name: 'Sort',
        component: Sort
      },
      {
        path: '/home/span',
        name: 'Span',
        component: Span
      },
      {
        path: '/home/archive',
        name: 'Archive',
        component: Arch
      },
      {
        path: '/home/admin',
        name: 'Admin',
        component: Admin
      },
      {
        path: '/home/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/home/About.vue')
      }
    ]
  },
  {
    path: '/user',
    name: 'User',
    component: LoginLayout,
    redirect: '/user',
    children: [
      {
        path: '/user',
        component: Login,
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
