<template>
      <div class="col s12 m6 l8">
      <div class="card orange darken-3 bill-card">
        <div class="card-content white-text">
          <div class="card-header">
            <span class="card-title">Курс валют</span>
          </div>
          <table>
            <thead>
            <tr>
              <th>Валюта</th>
              <th>Курс</th>
              <th>Дата</th>
            </tr>
            </thead>

            <tbody>
            <tr 
             v-for="cur in currencies" 
            :key="cur"
            
            >
              <td>{{cur}}</td>
              <td>{{rates[cur].toFixed(4)}}</td>
              <td>{{date | date('date')}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  <!-- <v-simple-table col s3>
    <template v-slot:default>
      <thead>
        <tr> 
          <th class="text-left">Валюта</th>
          <th class="text-left">Курс</th>
          <th class="text-left">Дата</th>
        </tr>
      </thead>
      <tbody>
        <tr
             v-for="cur in currencies" 
            :key="cur"
        >
              <td>{{cur}}</td>
              <td>{{rates[cur].toFixed(1)}}</td>
              <td>{{date | date('date')}}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table> -->

</template>

<script>
export default {
 props:['rates', 'date'],
 data() {
     return {
         currencies: ['RUB', 'USD','EUR', 'CAD' ]
     }
 }
}
</script>

<style>
.card-content {
  height: 100px  !important;
}
</style>