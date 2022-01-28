import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import BasicLayout from '../layout/BasicLayout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'User',
    component: BasicLayout,
    redirect:'/home',
    children: [
      {
        path: '/user',
        component: User,
      },
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/sort',
        name: 'Sort',
        component: User
      },
      {
        path: '/span',
        name: 'Span',
        component: Home
      },
      {
        path: '/archive',
        name: 'Archive',
        component: User
      },
      {
        path: '/admin',
        name: 'Admin',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
