<template>
  <div>
  <div class="app-main-layout" :class="{ 
    'maincolor': curentTeame === 'maincolor',
    'maincolor2': curentTeame === 'maincolor2',
    'maincolor3': curentTeame === 'maincolor3',
    'maincolor4': curentTeame === 'maincolor4',
    'maincolor5': curentTeame === 'maincolor5',
    'maincolor6': curentTeame === 'maincolor6'

    
    }">
    <Navbar @click="burgerOpened =!burgerOpened"/>
    <Sidebar v-model="burgerOpened"/>
    <main class="app-content" :class="{full: !burgerOpened}">
      <div class="app-page">
          <router-view></router-view>
    </div>
   </main>

   <div class="fixed-action-btn">
     <a class="btn-floating btn-large blue" href="#">
    <i class="large material-icons">add</i>
  </a>
  </div>
  </div>
 </div>
</template>

<script>
import Navbar from '../components/app/Navbar.vue'
import Sidebar from '../components/app/Sidebar.vue'

export default {

  data: () =>({
    burgerOpened:true,
    curentTeame:localStorage.getItem('theme-color')
  }),
  methods: {
    clg(){
      console.log("CLG")
    },
    clickSideEffect(theme){
      localStorage.setItem('theme-color', theme)
      this.curentTeame = localStorage.getItem('theme-color')
    }
  },
  name: 'main-layout',
  components:{
    Navbar,
    Sidebar

  }

}
</script>

<style>

</style>