export default {
    state: {
        ads: [
            {
                title: "First ad",
                description: "Hellow, I am discription",
                promo: false,
                image: "https://nashahistory.ru/sites/default/files/styles/main_img/public/maxresdefault_1_0.jpg?itok=aCZpYgGD",
                id: "125638803543",
                flex: 4
              },
              {
                title: "First ad",
                description: "Hellow, I am discription",
                promo: false,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO3AM2DNJXkex2PClDknT-OkYXGgNdwG2-NQ&usqp=CAU",
                id: "1239987656",
                flex: 4
              },
              {
                title: "First ad",
                description: "Hellow, I am discription",
                promo: false,
                image: "https://24tv.ua/resources/photos/news/1200x675_DIR/201612/765317.jpg?201809150817",
                id: "1236546723",
                flex: 4
      
              },
              {
                title: "First ad",
                description: "Hellow, I am discription",
                promo: true,
                image: "https://www.depo.ru/upload/iblock/11d/11d13788cf2c942023d00d20f1e9871d.jpg",
                id: "12563880365543",
                flex: 4
              },
              {
                title: "First ad",
                description: "Hellow, I am discription",
                promo: true,
                image: "https://www.depo.ru/upload/iblock/11d/11d13788cf2c942023d00d20f1e9871d.jpg",
                id: "1256388035543",
                flex: 4
              },
        ]
    },
    mutations: {
      createAd (state, payload) {
        state.ads.push(payload)
      }
    },
    actions: {
      createAd ({commit}, payload) {
        const randomNumber = Math.floor(Math.random() * 1000000000000000000000) + 1;
        payload.id = randomNumber

        commit('createAd', payload )
      }
    },
    getters: {
        // getters must be fuctions that return us something 
        // they takes STATE as parameter 
        ads (state) {
            return state.ads
        },
        promoAds (state) {
            return state.ads.filter(ad =>{
                // return item.promo === true
                return ad.promo
            })
        },
        myAds (state){
            return state.ads
        },
        adById (state) {
            return (adId) =>{
              return state.ads.find(ad => ad.id === adId)
            }
        }
    }

}