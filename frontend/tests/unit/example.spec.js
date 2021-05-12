// import { shallowMount } from '@vue/test-utils'
// import Home from '@/components/Home.vue'

// describe('Home.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(Home, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })
import Vuex from 'vuex'

import { createLocalVue, mount } from '@vue/test-utils'
import Home from '../../src/views/Home.vue'
import Login from '../../src/views/Login.vue'
import DetailRecord from '../../src/views/Detail-Record.vue'
import History from '../../src/views/History.vue'
import VueRouter from 'vue-router'


import user from '../../src/store/user.module'
import alert from '../../src/store/alert.module'
import seeds from '../../src/store/seeds.module'
import trueAds from '../../src/store/trueAds.module'
import uploade from '../../src/store/uploade.module'
import theme from '../../src/store/theme.module'
import catigories from '../../src/store/catigories.module'
import account from '../../src/store/account.module'
import record from '../../src/store/record.module'


import Vuetify from 'vuetify'



describe('Orders', () => {
  const localVue = createLocalVue()
  let vuetify
  localVue.use(VueRouter)
  const router = new VueRouter()
  localVue.use(Vuex)
  const store = new Vuex.Store({
    state: 
    {
     
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
      account,
      record
    }
  })

  const componentConfig = {
    localVue,
    router,
    store

  }

  beforeEach(() => {
    vuetify = new Vuetify()
  
  it('renders a div', () => {
    const wrapper = mount(Login, componentConfig)
  })

  
  it('renders a div', () => {
    const wrapper = mount(DetailRecord, componentConfig)
  })
  
  it('renders a div', () => {
    const wrapper = mount(History, componentConfig)
  })


  })

})