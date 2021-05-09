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
   async mounted() {
    // this.$messages('TEST ')
    // this.$error('TEST ')
    this.currency = await this.$store.dispatch('frtchCurrency')
    // await this.$store.dispatch('getAccount')
  },


  

}
</script>
<style>
@import '~materialize-css/dist/css/materialize.min.css';
@import './assets/index.css';
</style>
