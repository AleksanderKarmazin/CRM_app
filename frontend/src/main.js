import Vue from 'vue'
import Vuelidate from 'vuelidate'
import FlashMessage from '@smartweb/vue-flash-message';


import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'materialize-css/dist/js/materialize.min/'
// Components
import Loader from './components/app/Loader.vue'

// pipes - filter 
import dateFilter from './filters/date.filter'
import currencyFilter from './filters/currency.filter'
//Custom plagins
import messagePlagin from './utils/message.plagin'
 //Directives 
import tooltipDirective from './directives/tooltip.directive' 
import Paginate from 'vuejs-paginate'



Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(messagePlagin)
Vue.use(FlashMessage);
Vue.component('paginate', Paginate)
// Произошла глобальная регистрация этой функции, теперь она видна во всём приложении 
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)

Vue.component('Loader', Loader)

Vue.directive('tooltip', tooltipDirective)


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
