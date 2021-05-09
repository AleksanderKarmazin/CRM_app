<template>
  <div>
  <div class="page-title">
    <h3>История записей</h3>
  </div>

  <div class="history-chart">
    <canvas></canvas>
  </div>
<loader v-if="loading" />
        <p v-else-if="!records.length" class="center">
          Записей  пока нет
          <router-link to="/record">Добавте первую запись</router-link>
          </p>


  <section v-else>
   <HistoryTable
   :records="records"
   />
  </section>
</div>
</template>

<script>
import Loader from '../components/app/Loader.vue'
import HistoryTable from '../components/HistoryTable.vue'
export default {
  components: { HistoryTable, Loader, Loader },
  name:'history',
  data() {
    return {
      loading: true,
      records:[],
      categories:[],
    }
    
  },
  async mounted() {
    // this.records = await this.$store.dispatch('getRecord')
    this.categories = await this.$store.dispatch('getCatigories')
     await this.$store.dispatch('getRecord')
    const records = this.$store.getters.getRecord
    const catArr = this.$store.getters.getCatigory
    const modRecords = records.map( record =>{
        return {
          ...records,
          categoryName: catArr.find(c => c._id === record.category).title,
          typeClass: record.type === 'income' ? 'green' : 'red',
          typeText: record.type === 'income' ? 'Доход' : 'Расход',
          
          
        }
    })
    this.records =  modRecords
    console.log('this.records', this.records)
    console.log('this.categories', this.categories)
    this.loading=false

    },

}
</script>

<style>

</style>

