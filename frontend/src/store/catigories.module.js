import {  
    getCatigoriesById, 
    deleteCatigoriesById, 
    createCatigory, 
    updateCatigoryById,
    getCatigories,
    
} from '../services/catigories.service'


export default {
    state: {
        catigories: []
    },
    getters: {
        getCatigory: state => {
            return state.catigories;
        }
    },
    mutations: {
        createCatigory (state, payload) {
            state.catigories.push(payload)
          },
        setCatigories (state, payload) {
            state.catigories = payload
        }

    },
    actions: {
        async createCatigory({commit, dispatch}, {title, limit}) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const newCatigory = await createCatigory({
                  title,
                  limit
                  })
                  console.log('New catigory in request', newCatigory);
                  commit('createCatigory', newCatigory) 
                  dispatch('getCatigories')
                  commit('setLoading', false)
                  return newCatigory
            } catch (error) {
                commit('setError', error.response.data.message)
                commit('setLoading', false)
                throw error;
            }
        },
        async getCatigories({commit}) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const Catigories = await getCatigories()
                commit('setCatigories', Catigories) 
                commit('setLoading', false)
                return Catigories;
            } catch (error) {                
                console.log('err', error)
                console.log('err', error.response.data.stack)
                commit('setError', error.response.data.message)
                commit('setLoading', false)

                throw error;
            }
        }, 
        async getCatigoriesById({commit}, {_id}) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const CatigoryById = await getCatigoriesById({_id})
                //   console.log('catigory by ID from request', CatigoryById);
                  commit('setLoading', false)
                return CatigoryById;
            } catch (error) {
                commit('setError', error.response.data.message)
                commit('setLoading', false)
                console.log('err', error.response.data.message)
                console.log('err', error.response.data.stack)
                throw error;
            }
        },
        async deleteCatigoriesById({commit, dispatch}, {_id}) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const CatigoryById = await deleteCatigoriesById({
                    _id
                })
                console.log('catigory by ID from request was deleted', CatigoryById);
                dispatch('getCatigories')
                commit('setLoading', false)
            } catch (error) {
                console.log('err', error)
                console.log('err', error.response.data.stack)
                commit('setError', error.response.data.message)
                commit('setLoading', false)
                
                throw error;
            }
        },
        async updateCatigoryById({commit, dispatch}, {
            _id,
            title,
            limit
        }) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const CatigoryById = await updateCatigoryById({
                    title,
                    limit
                },{_id})
                  console.log('catigory by ID from request was updated', CatigoryById);

                dispatch('getCatigories')
                commit('setLoading', false)
                return CatigoryById;
            } catch (error) {
                commit('setError', error.response.data.message)
                commit('setLoading', false)
                console.log('err', error.response.data.message)
                console.log('err', error.response.data.stack)
                throw error;
            }
        },
        

    }
};