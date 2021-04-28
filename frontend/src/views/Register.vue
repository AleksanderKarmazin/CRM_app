<template>
  <form class="card auth-card" @submit="registerSubmit">
  <div class="card-content">
    <span class="card-title">Домашняя бухгалтерия</span>
    <div class="input-field">
      <input
          id="name"
          type="text"
          v-model.trim="name"
          :class="{
            invalid: $v.name.$dirty &&  !$v.name.required
            }"
      >
      <label for="name">Имя</label>
      <small 
      class="helper-text invalid"
      v-if="$v.name.$dirty && !$v.name.required"
      >
      Name must be provided

      </small>
    </div>
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
    <div class="input-field">
      <input
          id="password"
          type="password"
          v-model.trim="confirmPassword"
          :class="{
            invalid: !$v.confirmPassword.sameAsPassword
            }"
      >
      <label for="password">Подтвердить пароль</label>
      <small 
      class="helper-text invalid"
      v-if="!$v.confirmPassword.sameAsPassword"
      >
      Password must not be same!
      </small>
      <!-- <small 
      class="helper-text invalid"
      v-else-if="$v.password.$dirty && !$v.password.conferm"
      >
      Please enter correct Password! Password must be at least 
      {{$v.password.$params.minLength.min}} 
      numbers! The entrened password has {{password.length}} nunbers!
      </small> -->
    </div>
  </div>
  <div class="card-action">
    <div>
      <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
      >
        Зарегистрироваться
        <i class="material-icons right">send</i>
      </button>
    </div>

    <p class="center">
      Уже есть аккаунт?
      <router-link to="/login">Войти!</router-link>
    </p>
  </div>
</form>
</template>

<script>
import {email, required, minLength, sameAs} from 'vuelidate/lib/validators'

export default {
name:"registration",
  data: ()=>({
    name:'',
    email:'',
    password:'',
    confirmPassword:''
  }),
  validations:{
    name:{required},
    email:{email, required},
    password:{required, minLength: minLength(3)},
    confirmPassword:{required, sameAsPassword: sameAs('password')}
  },
  methods: {
    registerSubmit(e){
      e.preventDefault();
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword
      }
      console.log(formData)
      this.$router.push('/')
    }
  },
}
</script>

<style>

</style>

