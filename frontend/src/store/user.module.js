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

    // {name, email, password}
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
                
                // localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('user', JSON.stringify(user))
                commit('setUser', user) 
                commit('setInfo', user.message)
                console.log('user', user)
                console.log('user.message', user.message)
                commit('setLoading', false)
                }
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
        async loginUser({commit },{email, password} ) {
        // console.log('{email, password}', {email, password})
        try {
          commit('clearError')
          commit('setLoading', true)
          const user = await userLoginReq({
               email, password
            })     
          if (user.token) {
            
            localStorage.setItem('user', JSON.stringify(user))
            commit('setUser', user) 
            const infoMessage = "THIS IS HARD CODE MESSAGE! Congratulation! You are succefully log in!"
            // commit('setInfo', user.message)
            localStorage.setItem('loginMeesage', JSON.stringify(infoMessage))
            commit('setInfo', infoMessage)
            console.log('user', user)
            // console.log('infoMessage', user.message)
            // console.log('infoMessage', infoMessage)
            commit('setLoading', false)
            // router.push('/')
            }
        //   return user
        } catch (error) {
            commit('setLoading', false)
            commit('setError', error.response.data.message)
            // console.log('err', error.response.data.message)
            // console.log('err', error.response.data.stack)
            throw error;
        }
            }
        },



        // registerUser ({commit}, 
            
        //     {name, email, password}
        //     // payload
        //     ) {
        //     // Want to use async/await? Add the `async` keyword to your outer function/method.
        //         async function getUser() {
        //         let payload = { name, email, password};
        //         try {
        //             const res = await axios.post('http://localhost:5000/api/users', payload); 
        //             if (res.data.token) {
        //                 console.log('before', res.data)
        //                 // store user details and jwt token in local storage to keep user logged in between page refreshes
        //                 }
        //                 // localStorage.setItem('user', JSON.stringify(user))
        //                 localStorage.setItem('user', JSON.stringify(res.data))
        //                 commit('setUser', res.data) 
        //                 console.log('after',res.data)
        //         }
        //         catch (error) {
        //             console.error(error);
        //             }
        //         }
                

        //         getUser()
            
            
            // =========
                // function getUser(name, email, password) {
            //     let payload = { name, email, password};
            //     return axios.post('http://localhost:5000/api/users', payload)
            //     .then(user => {
            //         // login successful if there's a jwt token in the response
            //         if (user.token) {
            //             console.log(user);
            //             // store user details and jwt token in local storage to keep user logged in between page refreshes
            //             localStorage.setItem('user', JSON.stringify(user));
            //         }
            //     })
            //     .then(users => commit('setUser', users))
            //     .catch(function (error) {
            //         // handle error
            //         console.log(error);
            //       });
            // }
            // getUser();
// =====
    //     }

        
    // },
    getters:{
        user (state) {
            return state.user
        },
        isUserLoggedIn (state) {
            return state.user !=null
        }
    }
}