<template>
        <div>
    <div class="page-title">
    <h3>Категории</h3>
      </div>
      <section>
    <div class="row">
      <CatigiryCriate/>
      <CatigiryEdit/>
    </div>
    </section>
   </div>
</template>

<script>
import CatigiryCriate from '../components/CatigiryCriate.vue'
import CatigiryEdit from '../components/CatigiryEdit.vue'


export default {
  name:'Catigories',
  components: { CatigiryCriate, CatigiryEdit },

}
</script>

<style>

</style>