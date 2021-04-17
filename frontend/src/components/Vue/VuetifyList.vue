<template>
  <v-container>
    <v-layout row>
      <v-flex lg>
        <h1 class="text--secondary ma-12 text-center">Vuetify components</h1>
        <v-card
          class="elevation-10 ma-4"
          v-for="link in links"
          :key="link.title"
        >
          <v-layout row>
            <v-flex lg class="text--secondary ma-4 text-center">
              <v-card-text>
                <h2 class="text--primary ma-4">{{ link.title }}</h2>
                <p class="text-start">{{ link.description }}</p>
                <!-- <v-img :src="require(`@/assets/img/${link.img}`)"></v-img> -->
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="info"
                  target="_blank"
                  :href="link.vuetifyUrl"
                  class="info mr-4"
                >
                  <v-icon class="mr-2">article</v-icon>
                  Open on Vuetify Doc</v-btn
                >
                <v-btn color="success" class="info mr-4" :to="link.url">
                  <v-icon class="mr-2">article</v-icon>
                  My useage</v-btn
                >
                <!-- <v-btn
                  color="warning"
                  class="info mr-4"
                  href="https://stackoverflow.com/questions/49654527/open-link-in-new-window-with-vuetify-v-btn-and-vue-router"
                  >Cool</v-btn
                >
                <v-btn 
                class="info mr-4"
                href="https://stackoverflow.com/questions/49654527/open-link-in-new-window-with-vuetify-v-btn-and-vue-router"
                target="_blank"
                >
                  <v-icon>window</v-icon> Stack overflow
                </v-btn> -->
                <!-- https://stackoverflow.com/questions/49654527/open-link-in-new-window-with-vuetify-v-btn-and-vue-router -->
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  // data() {
  //   return {
  //   links2: [
  //     { title: "Orders", icon: "bookmark_border", url: "/orders" },
  //     { title: "New ad", icon: "note_add", url: "/new" },
  //     { title: "My ads", icon: "list", url: "/list" },
  //     { title: "Vuetify comp.", icon: "apps", url: "/components" },
  //     ],

  //   }
  // },
  computed: {
    links() {
      return [
        {
          title: "Alerts - Оповещения",
          description:
            " Компонент v-alert используется для передачи важной информации \
        пользователю через использование контекстных типов значков и цвета. \
        Эти типы по умолчанию бывают четырех вариантов: успех, информация, предупреждение, \
        и ошибка. Назначаются значки по умолчанию, которые помогают отображать разные \
        действия, которые изображает каждый тип. Многие части предупреждения, такие как граница, \
        значок, а также цвет можно настроить в соответствии практически с любой ситуацией.\
        ",
          vuetifyUrl: "https://vuetifyjs.com/en/components/alerts/",
          url: "/alerts",
          img: "1.jpg"
        },
        {
          title: "Application - Default application markup - Разметка приложения ",
          description:
            "Это пример разметки приложения по умолчанию для Vuetify. \
            Вы можете размещать элементы макета где угодно, если примените \
            свойство app. Ключевым компонентом во всем этом является v-main.\
             Его размер будет динамически изменяться в зависимости от структуры \
             обозначенных вами компонентов приложения. Вы можете использовать \
             комбинации любых или всех вышеперечисленных компонентов, \
             включая v-bottom-navigation.",
          vuetifyUrl: "https://vuetifyjs.com/en/components/application/#api",
          url: "/application",
          img: "2.jpg"
        },
        {
          title: "Aspect ratios - Соотношения сторон",
          description:
            "Компонент v-responseive можно использовать для исправления любого раздела с определенным соотношением сторон.",
          vuetifyUrl: "https://vuetifyjs.com/en/components/aspect-ratios/",
          url: "/aspect",
          img: "3.jpg"
        },
        {
          title: "Avatars",
          description:
            "Компонент v-avatar обычно используется для отображения круглых\
             изображений профиля пользователя. Этот компонент позволит вам \
             динамически изменять размер и добавлять радиус границы адаптивных \
             изображений, значков и текста. Доступен вариант плитки для отображения \
             аватара без радиуса границы.",
          vuetifyUrl: "https://vuetifyjs.com/en/components/aspect-ratios/",
          url: "/aspect",
          img: "4.jpg"
        },
        {
          title: "Badges - Значки",
          description:
            "Компонент v-badge добавляет надстрочные или подстрочные индексы \
            к значку или тексту, похожему на аватар, на контент, чтобы выделить \
            информацию для пользователя или просто привлечь внимание к определенному \
            элементу. Содержимое значка обычно содержит числа или значки.",
          vuetifyUrl: "https://vuetifyjs.com/en/components/aspect-ratios/",
          url: "/aspect",
          img: "5.jpg"
        },
        {
          title: "Banners",
          description:
            "The v-banner component is used as middle-interruptive message \
             to user with 1-2 actions. It comes in 2 variations single-line \
             and multi-line (implicit). These can have icons which you can \
             use with your message and actions.",
          vuetifyUrl: "https://vuetifyjs.com/en/components/banners/#usage",
          url: "/banners",
          img: "6.jpg"
        },

      ];
    },
  },
  created() {
    // this.$store.dispatch("getAdAction");
    // console.log("seeds from created seeds hook:",)
  },
  // links2 () {
  //     return [
  //       { title: "Orders", icon: "bookmark_border", url: "/orders" },
  //       { title: "New ad", icon: "note_add", url: "/new" },
  //       { title: "My ads", icon: "list", url: "/list" },
  //       { title: "Vuetify comp.", icon: "apps", url: "/components" },

  //         ]
  //     }
};
</script>

<style></style>
