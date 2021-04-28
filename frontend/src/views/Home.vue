<template>
  <div>
  <div class="page-title">
    <h3>Счет</h3>

    <button class="btn waves-effect waves-light btn-small" @click="refresh">
      <i class="material-icons">refresh</i>
    </button>
  </div>

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
</template>

<script>
import messages from '../utils/messages'
import HomeBill from '../components/HomeBill'
import HomeCurrency from '../components/HomeCurrency'


export default {
  name:'home',
  data: () => ({
    loading:true,
    currency: null
  }),
  async mounted() {
    this.currency = await this.$store.dispatch('frtchCurrency')
    this.loading = false
    // if (messages[this.$route.query.message]) {
    //     this.$messages(messages[this.$route.query.message])
    //   }
  }, methods: {
    async refresh() {
      this.loading = true;
      this.currency = await this.$store.dispatch('frtchCurrency')
      this.loading = false
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




