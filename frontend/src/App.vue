<template>
  <div  id="app">
      <router-view></router-view>
   
</div>
</template>

<script>
// import Home from "../components/Home";
// import Home from "../components/Home";
export default {
  name: "App",
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    error() {
      return this.$store.getters.error;
    },
    info() {
      return this.$store.getters.info;
    },
    user() {
      return this.$store.getters.user;
    },
    isUserLoggedIn() {
      const loggedInUser = localStorage.getItem('user')
      if (loggedInUser) {
        return true
      }
      return false
      // return this.$store.getters.isUserLoggedIn;
    }, 
    links () {
      if (this.isUserLoggedIn) {
          return [
        { title: "Orders", icon: "bookmark_border", url: "/orders" },
        { title: "New ad", icon: "note_add", url: "/new" },
        { title: "My ads", icon: "list", url: "/list" },
        { title: "Vuetify comp.", icon: "apps", url: "/components" },
        { title: "Vuetify comp.2", icon: "my_location", url: "/components2" },
        
        
          ]
      }
      return [
        { title: "Login", icon: "lock", url: "/login" },
        { title: "Registration", icon: "face", url: "/registration" },
        
        ]
    }

  },
  components: {
    // Home
  },
  data() {
    return {
      drawer: false,
      // items: [
      //     { icon: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
      //     { icon: true, title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
      //     { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
      //     { icon: true, title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
      //   ],
      


      // links: [
      //   { title: "Login", icon: "lock", url: "/login" },
      //   { title: "Registration", icon: "face", url: "/registration" },
      //   { title: "Orders", icon: "bookmark_border", url: "/orders" },
      //   { title: "New ad", icon: "note_add", url: "/new" },
      //   { title: "My ads", icon: "list", url: "/list" },
      // ],
    };
  },
  methods: {
    clearErorr() {
      this.$store.dispatch("clearError");
    },
    clearInfo() {
      this.$store.dispatch("clearInfo");
      localStorage.removeItem('loginMeesage')
    },
    logout() {
      localStorage.removeItem('user')
      document.location.reload();
    }
  }, 
};
</script>
<style scoped>
.pointer {
  cursor: pointer;
  color: white;
}
</style>
