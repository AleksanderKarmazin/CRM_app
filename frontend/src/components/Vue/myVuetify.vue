<template>
  <v-container>
    <v-layout row>
      <v-flex lg>
        <h1 class="text--secondary ma-12 text-center">Vuetify components 2</h1>
        <v-app>
          <v-navigation-drawer v-model="drawer" app>
            <!-- -->
          </v-navigation-drawer>

          <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <!-- https://material.io/resources/icons/?icon=3d_rotation&style=baseline -->
            <v-app-bar-nav-icon>
              <span class="material-icons pointer">
                3d_rotation
              </span>
            </v-app-bar-nav-icon>
          </v-app-bar>

          <!-- Sizes your content based upon application components -->
          <v-main>
            <!-- Provides the application the proper gutter -->
            <v-container fluid>
              <!-- If using vue-router -->
              <router-view></router-view>
            </v-container>
          </v-main>

           <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="primary lighten-6 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
        </v-app>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
      // links2: [
      //   { title: "Orders", icon: "bookmark_border", url: "/orders" },
      //   { title: "New ad", icon: "note_add", url: "/new" },
      //   { title: "My ads", icon: "list", url: "/list" },
      //   { title: "Vuetify comp.", icon: "apps", url: "/components" },
      //   ],
    };
  },
  computed: {
    
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
