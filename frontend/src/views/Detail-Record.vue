<template>
  <div>
    <Loader v-if="loading" />
    
  <div v-else-if="record">
    <div class="breadcrumb-wrap">
      <router-link to="/history" class="breadcrumb">История</router-link>
      <a @click.prevent  class="breadcrumb">
        {{record.type === 'income' ? 'Доход' : 'Расход'}}
      </a>
    </div>
    <div class="row">
      <div class="col s12 m6">
        <div class="card"
        :class="{
          'red': record.type === 'outcome',
          'green': record.type === 'income',
          }"
        >
          <div class="card-content white-text">
            <p>Описание:{{record.description}}</p>
            <p>Сумма: {{record.amount | currency}}</p>
            <p>Категория: {{record.categoryName}}</p>

            <small>{{record.date |  date('datetime')}}</small>
          </div>
        </div>
      </div>
    </div>
  </div>

  <p v-else class="center"> 
    <strong>
      Записей  c id {{$route.params.id}} не найдена 
 </strong>
  
  </p>
</div>
</template>

<script>
import Loader from '../components/app/Loader.vue'
export default {
  components: { Loader },
  name:"detail",
  data() {
    return {
      record: null,
      loading: true
    }
  },
  async mounted() {
    
    const getRecordById =  await this.$store.dispatch(
      'getRecordById', 
      {_id:this.$route.params.id })
    //  console.log("getRecordById",getRecordById)
    const getCatigoriesById =  await this.$store.dispatch(
      'getCatigoriesById', 
      {_id:getRecordById.category._id})
    console.log("getCatigoriesById",getCatigoriesById)
    this.record = {
      ...getRecordById,
      categoryName: getCatigoriesById.title
    }
    console.log("this.record", this.record)

    this. loading = false
  },
}
</script>

<style>

</style>

