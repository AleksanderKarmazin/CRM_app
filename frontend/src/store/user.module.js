import { userRegisterReq, userLoginReq  } from '../services/user.service'

const userFromStorege = JSON.parse(localStorage.getItem('user'));
// const initialState = user
//     ? { status: { loggedIn: true }, user }
//     : { status: {}, user: null };
    const user = userFromStorege 
    ?  userFromStorege
    :  null ;


export default {
    state: {
        user: user 
        // user: null
    },
    mutations: {
        setUser (state, payload) {
            state.user = payload
        }
    },
    actions: {
        async registerUser({commit },{name, email, password} ) {
            try {
              commit('clearError')
              commit('clearInfo')
              commit('setLoading', true)
              const user = await userRegisterReq({
                    name, email, password
                })
              if (user.token) {
                localStorage.setItem('user', JSON.stringify(user))
                commit('setUser', user) 
                commit('setInfo', user.message)
                console.log('user', user)
                console.log('user.message', user.message)
                commit('setLoading', false)
                }

            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.response.data.message)
                throw error;
            }
          },
        async loginUser({commit },{email, password} ) {
        try {
          commit('clearError')
          commit('setLoading', true)
          const user = await userLoginReq({
               email, password
            })     
          if (user.token) {
            
            localStorage.setItem('user', JSON.stringify(user))
            commit('setUser', user) 
            // const infoMessage = "THIS IS HARD CODE MESSAGE! Congratulation! You are succefully log in!"
            // // commit('setInfo', user.message)
            // localStorage.setItem('loginMeesage', JSON.stringify(infoMessage))
            // commit('setInfo', infoMessage)
            console.log('user', user)
            commit('setLoading', false)
            }

        } catch (error) {
            console.log(error);
            commit('setLoading', false)
            commit('setError', error.response.data.message)
            throw error;
        }
            }
        },
    getters:{
        user (state) {
            return state.user
        },
        isUserLoggedIn (state) {
            return state.user !=null
        }
    }
}