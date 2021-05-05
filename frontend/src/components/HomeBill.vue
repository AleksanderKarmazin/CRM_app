<template>
      <div class="col s12 m6 l4">
      <div class="card light-blue bill-card">
        <div class="card-content white-text">
          <span class="card-title">Счет в валюте</span>
          <p 
          v-for="cur of currencies"
          :key="cur"
          class="currency-line"
          >
            <span>{{getCurrency(cur) | currency(cur)}}</span>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
 props:['rates'],
 data() {
     return {
         currencies: ['RUB', 'USD','EUR', 'CAD' ],
         balanceInRub: 0,
         financialGoalInRub: 0,
         persentageFullfilment: 0
     }
 },
 async mounted() {
    await this.$store.dispatch('getAccount')
    this.balanceInRub = this.$store.getters.getBalanceInRub
    console.log('balance', this.balanceInRub)


},
 computed: {
     base() {
          return this.balanceInRub/ (this.rates['RUB'] / this.rates['EUR'])
          // return this.$store.getters.user.countValue / (this.rates['RUB'] / this.rates['EUR'])
     }
            
 },
 watch:{
     base(){
     },
 },
 methods: {
     getCurrency(currency){
         return (Math.floor(this.base * this.rates[currency]))
         
     }
 },






}




</script>

<style>

</style>