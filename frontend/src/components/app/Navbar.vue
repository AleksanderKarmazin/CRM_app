<template>
      <nav class="navbar  lighten-1 maincolor" :class="{
        

    'maincolor2': curentTeame === 'maincolor2',
    'maincolor3': curentTeame === 'maincolor3',
    'maincolor4': curentTeame === 'maincolor4',
    'maincolor5': curentTeame === 'maincolor5',
    'maincolor6': curentTeame === 'maincolor6'

        }">
      <div class="nav-wrapper">
        <div class="navbar-left">
          <a href="#" @click.prevent="$emit('click')">
            <i class="material-icons wight-text">dehaze</i>
          </a>
          <span class="wight-text">{{date | date('datetime')}}</span>
        </div>

        <ul class="right hide-on-small-and-down">
          <li>
            <a
                class="dropdown-trigger wight-text"
                href="#"
                data-target="dropdown"
                ref="dropdownRef"
                
            >
               {{name}}
              <i class="material-icons right">arrow_drop_down</i>
            </a>

            <ul id='dropdown' class='dropdown-content'>
              <li>
                <router-link to="/profile" class="wight-text">
      
                  <i class="material-icons">account_circle</i>Профиль
                </router-link>
              </li>
              <li class="divider" tabindex="-1"></li>
              <li>
                <a href="#" class="wight-text" @click="logout">
                  <i class="material-icons">assignment_return</i>Выйти
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
  data: () =>({
    curentTeame:localStorage.getItem('theme-color'),
    date: new Date(),
    interval:null,
    dropdown:null
  }),
  computed:{
    name() {
      return `${this.$store.getters.user.name}`
    }
  },
  mounted() {
    this.dropdown = 
    M.Dropdown.init(this.$refs.dropdownRef, {
      constrainWidth:true
    }),
    this.interval = 
    setInterval(() => {
      this.date = new Date()
    }, 1000);

  },
  methods: {
    logout(e) {
      e.preventDefault()
      console.log('Logout')
      localStorage.removeItem('user')
      this.$router.push('/login?message=logout')
    }
  },
  beforeDestroy() {
    console.log('beforeDestroy')
    clearInterval(this.interval)
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy()
    }

  },

}
</script>

<style>

</style>