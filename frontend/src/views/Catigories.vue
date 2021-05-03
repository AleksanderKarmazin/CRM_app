<template>
        <div>
    <div class="page-title">
    <h3>Категории</h3>
      </div>
      <section>
        <Loader v-if="loading"/>
    <div class="row" v-else>
      <CatigiryCriate @created="addNewCategory"/>
      <CatigiryEdit
      :categories="categories"
      />
    </div>
    </section>
    <div class="tablePadding">
      <a href="https://vuetifyjs.com/en/components/data-tables/#crud-actions">Vuetify CRUD Table</a>
      
      <table>
        <thead>
          <tr>
              <th>Название категории</th>
              <th>Лимит</th>
          </tr>
        </thead>
        <tbody>
          <tr 
          v-for="c in categories" 
          :key="c._id"
          >
            <td>{{c.title}}</td>
            <td>{{c.limit}}</td>
          </tr>
        </tbody>
      </table>
  </div>
   </div>
</template>

<script>
import Loader from '../components/app/Loader.vue'
import CatigiryCriate from '../components/CatigiryCriate.vue'
import CatigiryEdit from '../components/CatigiryEdit.vue'


export default {
  name:'Catigories',
  data() {
    return {
      categories: [],
      loading: true,

    }
  },
  components: { CatigiryCriate, CatigiryEdit, Loader },
  async mounted() {
    await this.$store.dispatch('getCatigories')
    this.categories = this.$store.getters.getCatigory
    this.loading = false
    console.log('Правильные категории', this.categories)
    
  },


  methods: {
    async addNewCategory() {
    this.loading = true
    await this.$store.dispatch('getCatigories')
    this.categories = this.$store.getters.getCatigory
    this.loading = false
    // this.$store.commit('createCatigory', category)
    console.log('addNewCategory', this.categories)
    }
  },

}
</script>

<style>
.tablePadding{
  padding: 100px 0;
}
</style>