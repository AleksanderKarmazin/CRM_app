<template>
  <div>
  <div class="page-title">
    <h3>История записей</h3>
  </div>

  <div class="history-chart">
    <canvas ref="canvas"></canvas>
  </div>
<loader v-if="loading"/>
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
import { Pie } from 'vue-chartjs';
 
export default {
  components: { HistoryTable, Loader, Loader },
  name:'history',
  extends: Pie,
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
    this.setup()


    
    this.loading=false

    },
    methods: {
      setup() {
        const recs = this.$store.getters.getRecord
        const catArr = this.$store.getters.getCatigory
        const recForHistory = recs.map( record =>{
        return {
          ...record,
          categoryName: catArr.find(c => c._id === record.category).title,
          typeClass: record.type === 'income' ? 'green' : 'red',
          typeText: record.type === 'income' ? 'Доход' : 'Расход',

        }
        })
        this.setUpPagination(recForHistory)
    console.log('this.allItems', this.allItems)
    console.log('recForHistory', recForHistory)

    this.renderChart({
        labels: catArr.map(c => c.title)
        // ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
        ,
        datasets: [{
            label: 'Расходы по категориям',
            data: catArr.map(c => {
                return recs.reduce((total, r) => {
                  if (r.category === c._id && r.type === 'outcome') {
                    total += +r.amount
                  }
                  console.log(`Категория ${r.category} Потрачено ${total}`)
                  return total
                }, 0) 
            })
            ,
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
        },
       {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
        )
      }
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

       