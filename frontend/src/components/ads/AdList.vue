<template>
  <v-container>
    <v-layout row>
      <v-flex lg>
        <h1 class="text--secondary ma-12 text-center">Ad List (My Ads)</h1>
        <v-card class="elevation-10 ma-12" v-for="item in myAds" :key="item._id">
          <v-layout row>
            <v-flex xs4>
              <v-img
                class="white--text align-end"
                
                height="160px"
                :src="'http://localhost:5000' + item.image"
              ></v-img> 
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2 class="text--primary">{{ item.title }}</h2>
                <p>{{ item.description }}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" class="info mr-4" :to="'/ad/' + item._id"
                  >Open</v-btn
                >
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
  computed:{
    myAds () {
      return this.$store.getters.myAds
    }
  },
  created() {
    this.$store.dispatch("getAdAction");
    // console.log("seeds from created seeds hook:",)
  },
};
</script>

<style></style>
