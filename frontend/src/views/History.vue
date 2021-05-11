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
   :records="items"
   />
    <paginate
    v-model="page"
      :page-count="pageCount"
  :click-handler="pagHendler"
  :prev-text="'Назад'"
  :next-text="'Вперёд'"
  :container-class="'pagination'"
  :page-class="'waves-effect'"
    
    ></paginate>

  </section>
</div>
</template>

<script>
import Loader from '../components/app/Loader.vue'
import HistoryTable from '../components/HistoryTable.vue'
import paginationMixin from '../mixins/pagination.mixins';
export default {
  components: { HistoryTable, Loader, Loader },
  name:'history',
  mixins:[paginationMixin],
  data() {
    return {
      loading: true,
      records:[],
    }
    
  },
  async mounted() {
    await this.$store.dispatch('getCatigories')
    this.records = await this.$store.dispatch('getRecord')
    const recs = this.$store.getters.getRecord
    const catArr = this.$store.getters.getCatigory
    this.setUpPagination(recs.map( record =>{
        return {
          ...record,
          categoryName: catArr.find(c => c._id === record.category).title,
          typeClass: record.type === 'income' ? 'green' : 'red',
          typeText: record.type === 'income' ? 'Доход' : 'Расход',
        }
    }))
    console.log('this.allItems', this.allItems)
    this.loading=false

    },
    //PRIVIOUSE 
    // async mounted() {
    // this.categories = await this.$store.dispatch('getCatigories')
    //  await this.$store.dispatch('getRecord')
    // const records = this.$store.getters.getRecord
    // const catArr = this.$store.getters.getCatigory
    // const modRecords = records.map( record =>{
    //     return {
    //       ...record,
    //       categoryName: catArr.find(c => c._id === record.category).title,
    //       typeClass: record.type === 'income' ? 'green' : 'red',
    //       typeText: record.type === 'income' ? 'Доход' : 'Расход',
          
          
    //     }
    // })
    // this.records =  modRecords
    // console.log('this.records', this.records)
    // console.log('this.categories', this.categories)
    // this.loading=false

    // },

}
</script>

<style>

</style>

