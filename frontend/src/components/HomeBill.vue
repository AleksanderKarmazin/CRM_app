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
  <!-- <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Счет в валюте
          </th>
           <th class="text-left">
            Calories
          </th> 
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="cur of currencies"
          :key="cur"
        >
          <td>{{getCurrency(cur) | currency(cur)}}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table> -->


</template>

<script>



export default {
 props:['rates'],
 data() {
     return {
         currencies: ['RUB', 'USD','EUR', 'CAD' ]
     }
 },
 computed: {
     base() {
         console.log(this.$store.getters.user.countValue)
         console.log(this.$store.getters.user.countValue / (this.rates['RUB'] / this.rates['EUR']))
          return this.$store.getters.user.countValue / (this.rates['RUB'] / this.rates['EUR'])
     }
 },
 watch:{
     base(){
     }
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