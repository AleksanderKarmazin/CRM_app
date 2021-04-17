import { getSeeds } from '../services/seed.service'


export default {
    state: {
        seeds:null
    },
    mutations: {
        setSeed (state, payload) {
            state.seeds = payload
        }
    },
    actions: {
        async fetchSeeds({commit }) {
            try {
              commit('clearError')
            //   commit('clearInfo')
              commit('setLoading', true)
              const seeds = await getSeeds({})
              
               
                commit('setSeed', seeds) 
                // commit('setInfo', user.message)
                console.log('seed', seeds)
                // console.log('user.message', user.message)
                commit('setLoading', false)
                
                // router.push('/') 

            //   return user
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.response.data.message)
                // console.log('err', error.response.data.message)
                // console.log('err', error.response.data.stack)
                throw error;
            }
          },
    },
    getters:{
        seeds (state) {
            return state.seeds
        },
    }
}