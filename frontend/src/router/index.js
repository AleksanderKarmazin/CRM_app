import Vue from 'vue'
import VueRouter from 'vue-router'

import AuthRouterService from './auth.component'





Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    meta:{layout: 'empty'},
    component: () => import('../views/Login.vue')
  },  
  {
    path: '/registration',
    name: 'registration',
    meta:{layout: 'empty'},
    component: () => import('../views/Register.vue')
  },
  {
    path: '/catigories',
    name: 'catigories',
    meta:{layout: 'main'},
    component: () => import('../views/Catigories.vue'),
    //Первый вариант защиты роутов beforeEnter
    beforeEnter: AuthRouterService
  },

  {
    path: '/record',
    name: 'record',
    meta:{layout: 'main'},
    component: () => import('../views/Record.vue'),
    beforeEnter: AuthRouterService
    
  },
  {
    path: '/profile',
    name: 'profile',
    meta:{layout: 'main'},
    component: () => import('../views/Profile.vue'),
    beforeEnter: AuthRouterService
  },
  {
    path: '/planning',
    name: 'planning',
    meta:{layout: 'main'},
    component: () => import('../views/Planning.vue'),
    beforeEnter: AuthRouterService
  },
  {
    path: '',
    name: 'home',
    meta:{layout: 'main'},
    component: () => import('../views/Home.vue'),
    beforeEnter: AuthRouterService
  },
  {
    path: '/history',
    name: 'history',
    meta:{layout: 'main'},
    component: () => import('../views/History.vue'),
    beforeEnter: AuthRouterService
  },
  {
    path: '/detail-record',
    name: 'detail-record',
    meta:{layout: 'main'},
    component: () => import('../views/Detail-Record.vue'),
    beforeEnter: AuthRouterService
  },
  {
    path: '/theme',
    name: 'Theme',
    meta:{layout: 'main'},
    component: () => import('../views/Theme.vue'),
    beforeEnter: AuthRouterService
  },
  {
    path: '/notifications',
    name: 'Notifications',
    meta:{layout: 'main'},
    component: () => import('../views/Notifications.vue'),
    beforeEnter: AuthRouterService
  },

]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
