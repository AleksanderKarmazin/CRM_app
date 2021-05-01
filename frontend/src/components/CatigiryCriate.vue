<template>
        <div class="col s12 m6">
        <div>
          <div class="page-subtitle">
            <h4>Создать</h4>
          </div>

          <form @submit.prevent="submitHendler">
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
              Создать
              <i class="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
</template>

<script>
import {required, minValue} from 'vuelidate/lib/validators'


export default {
    name:'CatigiryCriate',
    data() {
        return {
            title:'',
            limit: 1
        }
    },
    validations:{
        title:{required},
        limit:{minValue: minValue(100)}
    }, 
    mounted() {
        M.updateTextFields()
    },
    methods: {
        submitHendler(){
            if (this.$v.$invalid) {
                this.$v.$touch()
                return
            }
            console.log("submitHendler")
        }
    },
}
</script>

<style>

</style>