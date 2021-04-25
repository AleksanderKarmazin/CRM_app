import Vue from 'vue'
import Vuex from 'vuex'


// import itemsAds from './itemsAds.module'
import user from './user.module'
import alert from './alert.module'
import seeds from './seeds.module'
import trueAds from './trueAds.module'
import uploade from './uploade.module'
import theme from './theme.module'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    // itemsAds,
    user,
    alert,
    seeds,
    trueAds,
    uploade,
    theme
  }
})
