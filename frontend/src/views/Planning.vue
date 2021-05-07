<template>
  <div>
  <div class="page-title">
    <h3>Планирование</h3>
    <h4>{{getBalanceInRub | currency('RUB')}}</h4>
  </div>
<Loader  v-if="loading"/>
    <p v-else-if="!categories.length"
    
      class="center">
      Категорий пока нет 
      <router-link to="/catigories">Добавить новую категорию</router-link>
      </p>


  <section v-else>
    <div v-for="c of categories" :key="c._id">
      <p>
        <strong>{{c.title}}</strong>
        {{c.spend | currency('RUB')}} из {{c.limit | currency('RUB')}} или {{c.progressPersent + ' %'}} 
      </p>
      <div class="progress" v-tooltip="c.tooltip">
        <div
            class="determinate red"
            :class="c.progressColor"
            :style="{width: c.progressPersent + '%'}"

            
        ></div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import Loader from '../components/app/Loader.vue'
import currencyFilter from '../filters/currency.filter'

export default {
  components: { Loader },
  name: 'planing',
  data() {
    return {
      loading: true,
      categories: [],
      getBalanceInRub: 0


    }
  },computed: {
    
  },
  async mounted() {
    const records = await this.$store.dispatch('getRecord')
    await this.$store.dispatch('getAccount')
    this.getBalanceInRub = this.$store.getters.getBalanceInRub
    const categories = await this.$store.dispatch('getCatigories')

    this.categories = categories.map(cat => {
    const spend = records
        .filter(r => r.category === cat._id)
        .filter(r => r.type === 'outcome')
        .reduce((total, record) =>{
            return total += +record.amount
        }, 0)
        const persent = Math.round(100 * spend/cat.limit)

        const progressPersent = persent > 100 ? 100 : persent
        const progressColor = persent < 60 
        ? 'green'
         :persent < 100 
         ? 'yellow'
         : 'red'
        const tooltipValue = cat.limit - spend
        const tooltip = `${tooltipValue < 0 ? 'Превышен лимит на': 'Осталось '} ${currencyFilter(Math.abs(tooltipValue))}`

         return {
           ...cat,
           spend,
           progressPersent,
           progressColor,
           tooltip
         }
    })
    console.log("cat - progressColor", this.categories)

    this.loading = false
  },

}
</script>

<style>

</style>


