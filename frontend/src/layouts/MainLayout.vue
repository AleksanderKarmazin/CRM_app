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
     <router-link class="btn-floating btn-large blue" to="/record" v-tooltip="'Создать новую запись'">
    <i class="large material-icons">add</i>
</router-link>
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

  mounted() {
    
  },
  methods: {

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