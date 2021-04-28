<template>
  <div  id="app">
    <component :is="layout">
      <router-view></router-view>
   </component>
</div>
</template>

<script>
import EmptyLayout from './layouts/EmptyLayout'
import MainLayout from './layouts/MainLayout'




export default {
  computed: {
    layout(){
      return (this.$route.meta.layout || 'empty' ) + '-layout'
    },
  },
  components:{
    EmptyLayout, MainLayout
  },
  // mounted() {
  //   // this.$messages('TEST ')
  //   // this.$error('TEST ')
  //   if (localStorage.getItem('loginMeesage')) {
  //     this.$messages(localStorage.getItem('loginMeesage'))
  //   }
  // },


  

}
</script>
<style>
@import '~materialize-css/dist/css/materialize.min.css';
@import './assets/index.css';
</style>
