<template>
        <div class="col s12 m6">
        <div>
          <div class="page-subtitle">
            <h4>Редактировать</h4>
          </div>

          <form @submit.prevent="submitUpdate">
            <div class="input-field" >
              <select ref="select" v-model="current">
                <option
                v-for="c of categories"
                :key="c._id"
                :value="c._id"
                >
                  {{c.title}}
                  </option>
              </select>
              <label>Выберите категорию</label>
            </div>

            <div class="input-field">
              <input
                  id="name"
                  type="text"
                  v-model="title"
                  :class="{invalid: $v.title.$dirty && !$v.title.required}"
              >
              <label for="name">Название</label>
              <span 
              v-if="$v.title.$dirty && !$v.title.required"
              class="helper-text invalid"
              >
              Введите название категории
              </span>
            </div>

              <div class="input-field">
              <input
                  id="limit"
                  type="number"
                  v-model="limit"
                  :class="{invalid: $v.limit.$dirty && !$v.limit.minValue}"
              >
              <label for="limit">Лимит</label>
              <span 
              v-if="$v.limit.$dirty && !$v.limit.minValue"
              class="helper-text invalid"
              >
              Минимальная величина {{$v.limit.$params.minValue.min}}
              </span>
            </div>

            <button class="btn waves-effect waves-light" type="submit">
              Обновить
              <i class="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
</template>

<script>
import {required, minValue} from 'vuelidate/lib/validators'

export default {
    name:'CatigiryEdit',
    props:{
      categories:{
        type: Array,
        requierd: true
      }
    },
    data() {
      return {
        select:null,
        title:'',
        limit: 1,
        current: null
      }
    },
    validations:{
        title:{required},
        limit:{minValue: minValue(100)}
    }, 
    watch: {
      current(catigoryId){
        const { title, limit } = this.categories.find(c=> c._id === catigoryId)
        this.title = title,
        this.limit = limit
          console.log(catigoryId)
      }
    }, 
    created() {
      const {_id, title, limit } = this.categories[0]
      this.current = _id,        
      this.title = title,
      this.limit = limit
    }, 
    methods: {
     async submitUpdate(){
        if (this.$v.$invalid) {
                this.$v.$touch()
                return
            }
        try {
          await this.$store.dispatch('updateCatigoryById', {
            _id: this.current,
            title: this.title,
            limit: this.limit })
        } catch (error) {
          
        }
      }
    },
    mounted() {
      this.select = M.FormSelect.init(this.$refs.select);
      M.updateTextFields()
    },
    destroyed() {
      if (this.select && this.select.destroy) {
        this.select.destroy()
      } 
    },
}
</script>

<style>

</style>