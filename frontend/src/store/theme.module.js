
const themeFromStorege = localStorage.getItem('theme-color')
    const theme = themeFromStorege
    ?  themeFromStorege
    :  null ;


export default {
    state: {
        theme: theme 
    },
    mutations: {
        setTheme (state, payload) {
            state.theme = payload
        },
        clearTheme (state) {
            state.theme = null
        },
    },
    actions: {
        setThemeAction ({commit}, payload) {

            localStorage.setItem('theme-color', payload)
          commit('setTheme', payload )
        },
        clearThemeAction ({commit}) {
            localStorage.removeItem('theme-color')
          commit('clearTheme' )
          }
    },
    getters:{
        theme (state) {
            return state.theme
        }
    }
}