<template>
<div>
1
  </div>
</template>

<script>
import AdListVue from './ads/AdList.vue';
export default {
  // name: 'Home',
  // data() {
  //   return {
  //     items: [
  //       {
  //         title: "First ad",
  //         description: "Hellow, I am discription",
  //         promo: false,
  //         src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
  //         id: "12356456",
  //         flex: 12
  //       },
  //     ],
  //   };
  // },
  computed: {
    // когда поьзуемся геттерем из стора это мы создаём поле 
    // promoAds так же является функцией 
    // promoAds () {
    //   // promoAds здесь не вызывается как функция
    //   return this.$store.getters.promoAds
    // },
    // ads () {
    //   // promoAds здесь не вызывается как функция
    //   return this.$store.getters.ads
    // },
    // seeds () {
    //   return this.$store.getters.seeds
    // },
    // loading () {
    //   return this.$store.getters.loading
    // }
  },

  created() {
    // this.$store.dispatch("fetchSeeds");
    // this.$store.dispatch("getAdAction");
    // // console.log("seeds from created seeds hook:",)
  },

  methods: {
  //   open () {
  //     console.log('open clicked');
  //   },
  //   bay () {
  //     console.log('bay clicked');
  //   }
  }
};
</script>

<style>
.car-link{
  position:absolute;
  bottom: 50px;
  left:50%;
  background: rgb(0, 0, 0);
  transform:translate(-50%, 0);
  padding: 5px 2px;
  border-radius: 5px;
}


</style>
