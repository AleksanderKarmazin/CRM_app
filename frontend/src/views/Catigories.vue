<template>
        <div>
    <div class="page-title">
    <h3>Категории</h3>
      </div>
      <section>
    <div class="row">
      <CatigiryCriate @created="addNewCategory"/>
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
  data() {
    return {
      categories: []
    }
  },
  components: { CatigiryCriate, CatigiryEdit },
  methods: {
    addNewCategory(category) {
       this.categories.push(category)
       console.log(this.categories)
    }
  },

}
</script>

<style>

</style>