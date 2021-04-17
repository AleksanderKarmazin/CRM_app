
const loginMeesage = JSON.parse(localStorage.getItem('loginMeesage'));
const info = loginMeesage
?  loginMeesage : null;

export default {
  
    state: {
        loading: false,
        error: null,
        info: info
        // info: null
       
    },
    mutations: {
        setLoading (state, payload) {
            state.loading = payload
        },
        setError (state, payload) {
            state.error = payload
        },
        clearError (state) {
            state.error = null
        },
        setInfo (state, payload) {
            state.info = payload
        },
        clearInfo (state) {
            state.info = null
        }
        
    },
    actions: {
        // base action
        // setLoading ({commit}, payload) {
        //     commit('',payload)
        // },

        setLoading ({commit}, payload) {
            commit('setLoading',payload)
        },
        setError ({commit}, payload) {
            commit('setError',payload)
        },
        clearError ({commit}) {
            commit('clearError')
        },
        setInfo ({commit}, payload) {
            commit('setInfo', payload)
        },
        clearInfo ({commit}) {
            commit('clearInfo')
        },

    },
    getters:{
        loading (state) {
           return state.loading 
        },
        error (state) {
            return state.error 
        },
        info (state) {
            return state.info 
        }
    }
}