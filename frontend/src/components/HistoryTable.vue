<template>
   <table>
      <thead>
      <tr >
        <th>#</th>
        <th>Сумма</th>
        <th>Дата</th>
        <th>Категория</th>
        <th>Тип</th>
        <th>Открыть</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="(record, idx) of records" :key="record._id">
        <td>{{idx +1}}</td>
        <td>{{record[idx].amount | currency('RUB')}}</td>
        <td>{{record[idx].date | date('datetime')}}</td>
        <td>{{record.categoryName }}</td>
        <td>
          <span 
          :class="[record.typeClass]"
          class="white-text badge red"
          >
          {{record.typeText }}
          </span>
        </td>
        <td>
          <button 
          v-tooltip="'Посмотреть запись'"
          class="btn-small btn" 
          @click="$router.push('/detail-record/' + record[idx]._id)"
          
          >
            <i class="material-icons">open_in_new</i>
          </button>
        </td>
      </tr>
      </tbody>
    </table>
</template>

<script>
export default {
    props: {
        records:{
            required: true,
            type: Array
        }
    }
}
</script>

<style>

</style>