<template>
  <form class="card auth-card" @submit="loginSubmit">
  <div class="card-content">
    <span class="card-title">Домашняя бухгалтерия</span>
    <div class="input-field">
      <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{
            invalid: ($v.email.$dirty && !$v.email.required)
            ||
            ($v.email.$dirty && !$v.email.email)
            }"
      >
      <label for="email">Email</label>
      <small 
      class="helper-text invalid"
      v-if="$v.email.$dirty && !$v.email.required"
      >
      Email must not be empty!
      </small>
      <small 
      class="helper-text invalid"
      v-else-if="$v.email.$dirty && !$v.email.email"
      >
      Please enter correct Email!
      </small>
    </div>
    <div class="input-field">
      <input
          id="password"
          type="password"
          v-model.trim="password"
          :class="{
            invalid: ($v.password.$dirty && !$v.password.required)
            ||
            ($v.password.$dirty && !$v.password.minLength)
            }"

      >
      <label for="password">Пароль</label>
      <small 
      class="helper-text invalid"
      v-if="$v.password.$dirty && !$v.password.required"
      >
      Password must not be empty!
      </small>
      <small 
      class="helper-text invalid"
      v-else-if="$v.password.$dirty && !$v.password.minLength"
      >
      Please enter correct Password! Password must be at least 
      {{$v.password.$params.minLength.min}} 
      numbers! The entrened password has {{password.length}} nunbers!
      </small>
    </div>
  </div>
  <div class="card-action">
    <div>
      <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
      >
        Войти
        <i class="material-icons right">send</i>
      </button>
    </div>

    <p class="center">
      Нет аккаунта?
      <router-link to="/registration">Зарегистрироваться</router-link>
    </p>
    </div>
    </form>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'
import messages from '../utils/messages'


export default {
  name:"login",
  data: ()=>({
    email:'',
    password:''
  }),
  validations:{
    email:{email, required},
    password:{required, minLength: minLength(3)}
  },
  mounted() {
    this.$messages('TEST ')
    this.$error('TEST ')
    if (messages[this.$route.query.message]) {
      this.$messages(messages[this.$route.query.message])
    }
  },

  methods: {
    loginSubmit(e){
      e.preventDefault();
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password
      }
      console.log(formData)
      this.$router.push('/')
    }
  },
}
</script>

<style>

</style>