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
          <button @click="clickHendler1" class="btn waves-effect waves-light" type="submit">
              Выкрутасы 1 - Получить все
              <i class="material-icons right">send</i>
            </button>
            <button @click="clickHendler2" class="btn waves-effect waves-light" type="submit">
              Выкрутасы 2 - Получит 1 
              <i class="material-icons right">send</i>
            </button>
            <button @click="clickHendler3" class="btn waves-effect waves-light" type="submit">
              Выкрутасы 3 - Обновить 1
              <i class="material-icons right">send</i>
            </button>
            <button @click="clickHendler4" class="btn waves-effect waves-light" type="submit">
              Выкрутасы 4 - Удалить 1
              <i class="material-icons right">send</i>
            </button>
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
       async submitHendler(){
            if (this.$v.$invalid) {
                this.$v.$touch()
                return
            }
            console.log("submitHendler")
            try {
              const category = await this.$store.dispatch('createCatigory', {
                title: this.title,
                limit: this.limit
                
              })
              console.log(category)

              this.title = '',
              this.limit = 1,
              this.$v.$reset(),
              this.$messages('Категория была создана')
              this.$emit('created', category)
            } catch (e) {
              console.error(e)
            }
        },
        async clickHendler1(){
           console.log("clickHendler1 - Получить всё")
            try {
              await this.$store.dispatch('getCatigories')



            } catch (error) {
              console.error(error)
            }
        },
        async clickHendler2(){
            console.log("clickHendler2 - Получит 1 ")
            try {
              await this.$store.dispatch('getCatigoriesById', {
                _id:'608eda6e13226c2218f0f406'
              })
            } catch (error) {}
        },
        async clickHendler3(){
            console.log("clickHendler3 - Обновить 1")
            try {
              await this.$store.dispatch('updateCatigoryById', {
                title: 'ЕСТЬ РАКЕТЫ',
                limit: 879678,
                _id:'608eda6e13226c2218f0f406'
              })
            } catch (error) {
              console.error(error);
            }
        },
        async clickHendler4(){
            console.log("clickHendler4 - Удалить 1")
            try {
              await this.$store.dispatch('deleteCatigoriesById', {
                _id:'608eda6e13226c2218f0f406'
              })
            } catch (e) {
              console.error('Ошибка при удалении', e)
            }
        },
    },
}
</script>

<style>

</style>