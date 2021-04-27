import Vue from 'vue'
import Vuelidate from 'vuelidate'


import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'materialize-css/dist/js/materialize.min/'
// pips - filter 
import dateFilter from './filters/date.filter'

 


Vue.config.productionTip = false

Vue.use(Vuelidate)
// Произошла глобальная регистрация этой функции, теперь она видна во всём приложении 
Vue.filter('date', dateFilter)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
