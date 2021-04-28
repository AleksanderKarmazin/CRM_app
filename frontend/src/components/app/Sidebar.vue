<template>
  <div >
    <ul class="sidenav app-sidenav" 
    :class="{open: value}"
    >
      <router-link
        v-for="link in links"
        :key="link.title"
        :to="link.url"
        active-class="active"
        :exact="link.exact"
      >
        <li>
          <a href="#" class="waves-effect waves-orange pointer"
            >{{ link.title }}
            <i class="smoll material-icons">{{ link.icon }}</i>
          </a>
        </li>
      </router-link>
    </ul>
    
  </div>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      curentTeame:localStorage.getItem('theme-color')
    };
  },
  computed: {
    links() {
      const thisIsTrue = true;
      if (thisIsTrue) {
        return [
          {
            title: "Счет",
            icon: "account_balance_wallet",
            url: "/",
            exact: "exact",
          },
          { title: "История", icon: "history_edu", url: "/history" },
          { title: "Планирование", icon: "pending_actions", url: "/planning" },
          { title: "Новая запись", icon: "note_add", url: "/record" },
          { title: "Категории", icon: "category", url: "/catigories" },
          { title: "Настройки темы", icon: "dark_mode", url: "/theme" },
          { title: "Уведомления", icon: "notifications", url: "/notifications" },

        ];
      } else {
        [
          { title: "Orders", icon: "bookmark_border", url: "/orders" },
          { title: "New ad", icon: "note_add", url: "/new" },
          { title: "My ads", icon: "list", url: "/list" },
          { title: "Vuetify comp.", icon: "apps", url: "/components" },
          { title: "Vuetify comp.2", icon: "my_location", url: "/components2" },
        ];
      }
    },
  },
};
</script>

<style></style>
