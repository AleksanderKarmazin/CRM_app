<template>
  <div>
    
  <div class="page-title">
     
    <h3>Счет</h3>
<div>
  <button class="btn waves-effect waves-light btn-small" @click="refresh">
      <i class="material-icons">refresh</i>
    </button>
    <button class="btn waves-effect waves-light btn-small" @click="show_chart">
      <i class="material-icons">show_chart</i>
    </button>
    </div>
    
  </div>
<div style="padding: 20px 0;">
 <v-progress-linear 
      v-if="bar"
      color="blue"
      v-model="pesentDone"
      height="75"
    > <div class="bar-content">
      <strong>Выполнена: {{ Math.ceil(pesentDone) }}%</strong>
      <br/>
      <strong>Финансовая цель: {{ currentGoal | currency('RUB') }}</strong>
      </div>
  </v-progress-linear>
</div >
<div style="padding: 20px 0;">
  <loader v-if="loading" />

  <div v-else class="row">
    <HomeBill
    :rates="currency.rates"
    
    />
    <HomeCurrency
    :rates="currency.rates"
    :date="currency.date"
    
    />
  </div>
  </div>
</div>
</template>

<script>
import messages from '../utils/messages'
import HomeBill from '../components/HomeBill'
import HomeCurrency from '../components/HomeCurrency'


export default {
  name:'home',
  data: () => ({
    loading:true,
    currency: null,
    pesentDone: 0,
    currentGoal: 0,
    bar: false
  }),
  async mounted() {
    this.currency = await this.$store.dispatch('frtchCurrency')
    await this.$store.dispatch('getAccount')
    this.pesentDone = this.$store.getters.persentageFullfilment
    this.currentGoal = this.$store.getters.getFinancialGoalInRub
    this.loading = false
  }, methods: {
    async refresh() {
      this.loading = true;
      this.currency = await this.$store.dispatch('frtchCurrency')
      this.loading = false
    },
    show_chart() {
      this.bar = !this.bar
    }


  },

  components:{ 
  HomeBill,
  HomeCurrency

  
  },

}
</script>

<style>

</style>




