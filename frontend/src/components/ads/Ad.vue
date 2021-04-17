<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card class="ma-6">
          <v-img
            class="white--text align-end"
            height="300px"
            :src="'http://localhost:5000'+ ad.image"
          ></v-img> r
          <v-card-text>
            <h1 class="text--primary">{{ad.title}}</h1>
            <p>
              {{ad.description}}
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="warning">Edit</v-btn>
            <v-btn color="success">Bay</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props:['_id'],
  computed: {
    ad () {
      const _id = this._id
      return this.$store.getters.adById(_id)
    }
  } 
};
</script>
