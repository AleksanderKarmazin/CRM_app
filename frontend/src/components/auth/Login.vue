<template>
<div>
<!-- <v-alert
      prominent
      type="error"
      v-if="error"
       
    >
      <v-row align="center">
        <v-col class="grow" > 
          <h2>{{error}}</h2>
        </v-col>
        <v-col class="shrink">
          <v-btn @click="clearErorr">&times;</v-btn>
        </v-col>
      </v-row>
    </v-alert> -->
  <v-container fluid fill-height class="loginOverlay">
    <v-layout flex align-center justify-center>
      <v-flex xs12 sm4 elevation-6>
        <v-toolbar class="pt-5 blue darken-4">
          <v-toolbar-title class="white--text"
            ><h4>Welcome Back</h4></v-toolbar-title
          > 
        </v-toolbar>
        <v-card>
          <v-card-text class="pt-4">
            <div>
              <v-form v-model="valid" ref="form">
                <v-text-field
                  prepend-icon="person"
                  label="Enter your e-mail address"
                  v-model="email"
                  type="Email"
                  :rules="emailRules"
                  required
                ></v-text-field>
                <v-text-field
                  name='password'
                  prepend-icon="lock"
                  label="Enter your password"
                  v-model="password"
                  min="8"
                  :append-icon="e1 ? 'visibility_off' : 'visibility'"
                  :append-icon-cb="() => (e1 = !e1)"
                  :type="e1 ? 'password' : 'text'"
                  :rules="passwordRules"
                  @click:append="() => (e1 = !e1)"
                  :counter="6"
                  required
                ></v-text-field>
                <v-layout justify-space-between>
                  <v-btn
                    @click="onSubmit"
                    :class="{
                      'blue darken-4 white--text': valid,
                      disabled: !valid,
                    }"
                    >Login</v-btn
                  >
                  <a href="">Forgot Password</a>
                </v-layout>
              </v-form>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // v-model="email"
      email: "",
      // v-model="password"
      password: "",
      valid: false,
      e1: false,
      passwordRules: [
        
        (v) => !!v || "Password is required",
        v => (v && v.length >=6) || "Password must be equals or more than 6 characters",
        v => (v && v.length <=8) || "Password must not be equals or more than 9 characters"
        
        ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
    };
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    error () {
      return this.$store.getters.error
    }
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password,
        };
        // this.$store
        //   .dispatch('loginUser', user)

        
        this.$store.dispatch('loginUser', user)
        .then(()=>{
          this.$router.push('/')
          // localStorage.removeItem('user')
          document.location.reload();
        })
        // .catch(err=> console.log(err))
        .catch(() => {
          
        })
      
        

        
      }
    },
    clearErorr () {
      this.$store.dispatch('clearError')
    }
  }, 
  created() {
    if (this.$route.query['loginError']) {
      this.$store.dispatch('setError','Please log in to access this page!')
  } 
  },
};
</script>

<style></style>
