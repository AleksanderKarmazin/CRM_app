<template>
  <div>
    <div class="page-title">
      <h3>Новая запись</h3>
    </div>

    <Loader v-if="loading"/>

    <p v-else-if="!categories.length"
    
      class="center">
      Категорий пока нет 
      <router-link to="/catigories">Добавить новую категорию</router-link>
      </p>

    <form v-else class="form" @submit.prevent="submitHendler">
      <div class="input-field">
        <select ref="select">
          <option 
          v-for="c of categories" 
          :key="c._id" 
          :value="c._id"
          >
            {{ c.title }}
          </option>
        </select>
        <label>Выберите категорию</label>
      </div>

      <p>
        <label>
          <input 
          class="with-gap" 
          name="type" 
          type="radio" 
          value="income" 
          v-model="type"
          />
          <span>Доход</span>
        </label>
      </p>

      <p>
        <label>
          <input 
          class="with-gap" 
          name="type" 
          type="radio" 
          value="outcome" 
          v-model="type"
          />
          <span>Расход</span>
        </label>
      </p>

      <div class="input-field">
        <input 
        id="amount" 
        type="number"
        v-model.number="amount" 
        :class="{invalid: $v.amount.$dirty && !$v.amount.minValue}"
        />
        <label for="amount">Сумма</label>
        <span 
              v-if="$v.amount.$dirty && !$v.amount.minValue"
              class="helper-text invalid"
              >
              Минимальная величина {{$v.amount.$params.minValue.min}}
        </span>
      </div>

      <div class="input-field">
        <input 
        id="description" 
        type="text" 
        v-model="description"
        :class="{invalid: $v.description.$dirty && !$v.description.required}"
        />
        <label for="description">Описание</label>
        <span 
              v-if="$v.description.$dirty && !$v.description.required"
              class="helper-text invalid"
              >
              Введите описание
              </span>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Создать
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
import Loader from '../components/app/Loader.vue';
import {required, minValue} from 'vuelidate/lib/validators'

export default {
  components: { Loader },
  name: "record",
  data() {
    return {
      categories: [],
      select: null,
      loading: true,
      type:'outcome',
      amount: 1,
      description:''
    };
  },    
  validations:{
        amount:{minValue: minValue(1)},
        description:{required}
  }, 
  computed: {
    canCreateRecord(){
       if (this.type === 'income') {
         return true;
       } else {
         return this.$store.getters.getBalanceInRub >= this.amount
       }
    }
  },
  methods: {
    async submitHendler(){
    if (this.$v.$invalid) {
      this.$v.$touch()
      return
    }
    if (this.canCreateRecord) {
       console.log("OK")
    } else {
      this.$messages(`На счёие не хватет ${this.amount - this.$store.getters.getBalanceInRub} ₽`)
    }
    }
  },

  async mounted() {
    await this.$store.dispatch("getCatigories");
    this.categories = this.$store.getters.getCatigory;
    this.loading = false;
    setTimeout(() => {
      this.select = M.FormSelect.init(this.$refs.select);
      M.updateTextFields()
    }, 0)


  },
    destroyed() {
      if (this.select && this.select.destroy) {
        this.select.destroy()
      } 
    }
};
</script>

<style></style>
