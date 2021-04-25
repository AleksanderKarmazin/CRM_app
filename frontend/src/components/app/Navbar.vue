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
          <span class="wight-text">12.12.12</span>
        </div>

        <ul class="right hide-on-small-and-down">
          <li>
            <a
                class="dropdown-trigger wight-text"
                href="#"
                data-target="dropdown"
            >
              USER NAME
              <i class="material-icons right">arrow_drop_down</i>
            </a>

            <ul id='dropdown' class='dropdown-content'>
              <li>
                <a href="#" class="wight-text">
                  <i class="material-icons">account_circle</i>Профиль
                </a>
              </li>
              <li class="divider" tabindex="-1"></li>
              <li>
                <a href="#" class="wight-text">
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
    curentTeame:localStorage.getItem('theme-color')
  }),

}
</script>

<style>

</style>