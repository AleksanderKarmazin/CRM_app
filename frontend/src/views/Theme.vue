<template>
<div>
<div class="btn_one_class">
  <h1>Main theams </h1>
  <FlashMessage></FlashMessage>
  <v-row
    align="center"
   
  >
    <v-btn @click="btn_1" class="btn_one_class single_btn">Theam 1 </v-btn>
    <v-btn @click="btn_2" class="btn_one_class">Theam 2</v-btn>
    <v-btn @click="btn_3" class="btn_one_class">Theam 3</v-btn>
    <v-btn @click="btn_4" class="btn_one_class">Theam 4</v-btn>
    <v-btn @click="btn_5" class="btn_one_class">Theam 5</v-btn>
    <v-btn @click="btn_6" class="btn_one_class">Theam 6</v-btn>
    <v-btn @click="btn_cleare" class="btn_one_class">Clear theam</v-btn>
    <v-btn @click="btn_info" class="btn_one_class">INFO</v-btn>
  </v-row>
 </div> 
 
 </div>
</template>

<script>
export default {
  data: () => ({

    }),
  methods: {
    btn_1(){
      this.$store.dispatch('setThemeAction', 'maincolor').then(()=>{
        console.log("BTN 1")
        document.location.reload();
        })
    },
    btn_2(){
      this.$store.dispatch('setThemeAction', 'maincolor2').then(()=>{
        console.log("BTN 2")
        document.location.reload();
        })
    },
    btn_3(){
      this.$store.dispatch('setThemeAction', 'maincolor3').then(()=>{
        console.log("BTN 3")
        document.location.reload();
        })
    },
    btn_4(){
      this.$store.dispatch('setThemeAction', 'maincolor4').then(()=>{
        console.log("BTN 4")
        document.location.reload();
        })
    },
    btn_5(){
      this.$store.dispatch('setThemeAction', 'maincolor5').then(()=>{
        console.log("BTN 5")
        document.location.reload();
        })
    },
    btn_6(){
      this.$store.dispatch('setThemeAction', 'maincolor6').then(()=>{
        console.log("BTN 6")
        document.location.reload();
        })
    },
    btn_cleare(){
      
      this.$store.dispatch('clearThemeAction')
      .then(()=>{
        console.log("btn_cleare")
        document.location.reload();
        })
    },
    btn_info(){
        this.flashMessage.warning({ title: 'Warning Title', message: "text" })
        console.log("btn_info")

    }
  }
}
</script>

<style>
.btn_one_class{
 margin: 10px;
 padding: 10px;
}
.single_btn{
  margin: 10px;
 padding: 10px;
 color: blue;
 background-color: rgb(233, 18, 18);
}
</style>