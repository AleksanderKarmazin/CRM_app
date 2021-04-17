import Vue from 'vue'
import VueRouter from 'vue-router'

import AuthRouterService from './auth.component'

import Home from '../components/Home.vue'
import Ad from '../components/ads/Ad.vue'
import AdList from '../components/ads/AdList.vue'
import NewAd from '../components/ads/NewAd.vue'
import Login from '../components/auth/Login.vue'
import Registration from '../components/auth/Registration.vue'
import Orders from '../components/User/Orders.vue'

//Vuetify components 
import VuetifyList from '../components/Vue/VuetifyList.vue'
import myVuetify from '../components/Vue/myVuetify.vue' 

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/ad/:_id',
    props:true,
    name: 'ad',
    component: Ad
  },
  {
    path: '/list',
    name: 'list',
    component: AdList,
    beforeEnter: AuthRouterService
  },
  {
    path: '/new',
    name: 'newAd',
    component: NewAd,
    beforeEnter: AuthRouterService
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registration',
    name: 'reg',
    component: Registration
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders,
    beforeEnter: AuthRouterService
  },

//Vuetify components 
  {
    path: '/components',
    name: 'VuetifyList',
    component: VuetifyList,
    beforeEnter: AuthRouterService
  },
  //Vuetify components2 
  {
    path: '/components2',
    name: 'myVuetify',
    component: myVuetify,
    beforeEnter: AuthRouterService
  }

]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




export default router
