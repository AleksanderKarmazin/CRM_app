<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <h1 class="text--secondary pa-4 ma-4">Create new Ad</h1>
        <v-form v-model="valid" ref="form">
          <v-text-field
            name="title"
            label="Add title"
            type="text"
            v-model="title"
            :rules="[(v) => !!v || 'Title required ']"
            required
          ></v-text-field>
          <v-textarea
            name="description"
            label="Add description"
            type="text"
            v-model="description"
            :rules="[(v) => !!v || 'Description required ']"
            required
          ></v-textarea>

          <!-- <v-layout justify-space-between>
            <v-btn
              @click="onSubmit"
              :class="{
                'blue darken-4 white--text': valid,
                disabled: !valid,
              }"
              >Login</v-btn
            >
          </v-layout> -->
        </v-form>
        <v-layout class="mb-3">
          <v-flex>
            <v-btn class="warning  mb-3" @click="triggerUpload">
              Upload
              
              <v-icon right dark>
                mdi-cloud-upload
                
              </v-icon>
            </v-btn>
            <v-layout class="mb-3">
            <input 
                ref="fileInput" 
                type="file" 
                style="display: none;" 
                accept="image/*"
                @change="onFileChage"
            >
              <v-flex>
                <img
                  :src="'http://localhost:5000' + image"
                  height="150"
                  class="mb-3"
                  v-if="image"
                />
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex>
                <v-switch
                  v-model="promo"
                  color="primary"
                  label="Add to promo"
                ></v-switch>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex>
                    <v-spacer></v-spacer>
                    <v-btn 
                    :disabled="!valid || !image"
                    color="success" 
                    @click="createAd"
                    
                    >
                    Create Ad</v-btn>
                </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
            title:"",
            description: "", 
            promo: false,  
            valid: false,
            image:'',


    };
  },
  // && this.$store.getters.uploadedFileData
  methods: {
      createAd (){
          if(this.$refs.form.validate()){
              //logic

              const ad ={
                title:this.title ,
                description: this.description, 
                promo: this.promo,
                image: this.$store.getters.uploadedFileData
                // image:"https://miro.medium.com/max/6416/1*7OCwu--TWqVluPMsZdzWKw.png" 
              }
              this.$store.dispatch('createAd', ad)
              .then(() => {
                this.$store.commit('clearUploadedFile')
                this.$router.push('/list')
              }).catch(() => {
                
              })
              console.log('This is AD',ad); 
          }
      },
      triggerUpload () {
        this.$refs.fileInput.click()
      },
      // onFileChage (event) {
      //   const file = event.target.files[0]

      //   const reader = new FileReader()
      //   reader.onload = (e) =>{
      //     this.image = reader.result
      //   }

      //   reader.readAsDataURL(file)
      //   this.imageLoade = file
      // },
      async onFileChage (e) {
      const file = e.target.files[0]
      const formData = new FormData()
      formData.append('image', file)
      // this.$store.dispatch('uploadeFrile', formData)
      // setUploading(true)
      try {
          const config = {
              headers: {
                  'Content-type': 'multipart/form-data'
              }
          }
          const { data } = await axios.post('http://localhost:5000/api/upload', formData, config)
          // commit('setUploade', data)
          this.$store.commit('setUploade', data)
          console.log("uploaded File data", data); 
          console.log('Uploade from store', this.$store.getters.uploadedFileData)
          this.image = this.$store.getters.uploadedFileData
         
          // setImage(data)
          // setUploading(false)
      } catch (error) {
          console.error(error)
          // setUploading(false)
      }
    }

  }
};
</script>

<style></style>
