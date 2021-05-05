import Vue from 'vue'
import Vuex from 'vuex'


// import itemsAds from './itemsAds.module'
import user from './user.module'
import alert from './alert.module'
import seeds from './seeds.module'
import trueAds from './trueAds.module'
import uploade from './uploade.module'
import theme from './theme.module'
import catigories from './catigories.module'
import account from './account.module'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async frtchCurrency() {
      const key = process.env.VUE_APP_FIXER 
      const res =  await fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB,CAD`)
      return await res.json()
    }
  },
  modules: {
    user,
    alert,
    seeds,
    trueAds,
    uploade,
    theme,
    catigories,
    account
  }
})
