import { createAd, fetchAd    } from '../services/ad.service'



export default {
    state: {
        ads: []
    },
    mutations: {
      createAd (state, payload) {
        state.ads.push(payload)
      },
      setAd (state, payload) {
        state.ads = payload
    }


    },
    actions: {
      async createAd({commit },{
        title,
        description,
        promo,
        image,
        flex
      } ) {
        try {
          commit('clearError')
          commit('clearInfo')
          commit('setLoading', true)
          const newAd = await createAd({
            title,
            description,
            promo,
            image,
            flex
            })
            console.log('newAd from request',newAd);
            commit('createAd', newAd) 
            commit('setLoading', false)
        } catch (error) {
            commit('setError', error.response.data.message)
            commit('setLoading', false)
            console.log('err', error.response.data.message)
            console.log('err', error.response.data.stack)
            throw error;
        }
      },
      async getAdAction({commit }) {
        try {
          commit('clearError')
          commit('clearInfo')
          commit('setLoading', true)
          const ad = await fetchAd({})
          commit('setAd', ad) 
          console.log('ad from new fetch funck', ad)
          commit('setLoading', false)

        } catch (error) {
            commit('setError', error.response.data.message)
            commit('setLoading', false)
            console.log('err', error.response.data.message)
            console.log('err', error.response.data.stack)
            throw error;
        }
      },
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
              return state.ads.find(ad => ad._id === adId)
            }
        }
    }

}