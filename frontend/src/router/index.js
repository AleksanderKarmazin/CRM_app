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
    component: () => import('../views/Catigories.vue')
  },

  {
    path: '/record',
    name: 'record',
    meta:{layout: 'main'},
    component: () => import('../views/Record.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta:{layout: 'main'},
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/planning',
    name: 'planning',
    meta:{layout: 'main'},
    component: () => import('../views/Planning.vue')
  },
  {
    path: '',
    name: 'home',
    meta:{layout: 'main'},
    component: () => import('../views/Home.vue')
  },
  {
    path: '/history',
    name: 'history',
    meta:{layout: 'main'},
    component: () => import('../views/History.vue')
  },
  {
    path: '/detail-record',
    name: 'detail-record',
    meta:{layout: 'main'},
    component: () => import('../views/Detail-Record.vue')
  },
  {
    path: '/theme',
    name: 'Theme',
    meta:{layout: 'main'},
    component: () => import('../views/Theme.vue')
  },

]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




export default router
