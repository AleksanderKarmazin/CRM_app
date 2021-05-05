import {  
    getRecord, 
    getRecordById, 
    deleteRecordById, 
    createRecord, 
    updateRecordById
    
} from '../services/record.service'


export default {
    state: {
        records: []
    },
    getters: {
        getRecord: state => {
            return state.records;
        }
            
    },
    mutations: {
        createRecord (state, payload) {
            state.records.push(payload)
          },
        setRecord (state, payload) {
            state.records = payload
        }

    },
    actions: {
        async createRecord({commit, dispatch}, 
            {
                category_id,    
                amount,
                description,
                type
            }) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const newRecord = await createRecord({
                    category_id,    
                    amount,
                    description,
                    type
                  })
                  console.log('New Record in request', newRecord);
                  commit('createRecord', newRecord) 
                  dispatch('getRecord')
                  commit('setLoading', false)
                  return newRecord
            } catch (error) {
                commit('setError', error.response.data.message)
                commit('setLoading', false)
                throw error;
            }
        },
        async getRecord({commit}) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const Record = await getRecord()
                commit('setRecord', Record) 
                commit('setLoading', false)
                return Record;
            } catch (error) {                
                console.log('err', error)
                console.log('err', error.response.data.stack)
                commit('setError', error.response.data.message)
                commit('setLoading', false)

                throw error;
            }
        }, 
        async getRecordById({commit}, {_id}) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const RecordById = await getRecordById({_id})
                  console.log('Record by ID from request', RecordById);
                  commit('setLoading', false)
                return RecordById;
            } catch (error) {
                commit('setError', error.response.data.message)
                commit('setLoading', false)
                console.log('err', error.response.data.message)
                console.log('err', error.response.data.stack)
                throw error;
            }
        },
        async deleteRecordById({commit, dispatch}, {_id}) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const RecordById = await deleteRecordById({
                    _id
                })
                console.log('Record by ID from request was deleted', RecordById);
                dispatch('getRecord')
                commit('setLoading', false)
                return RecordById;
            } catch (error) {
                console.log('err', error)
                console.log('err', error.response.data.stack)
                commit('setError', error.response.data.message)
                commit('setLoading', false)
                
                throw error;
            }
        },
        async updateRecordById({commit, dispatch}, {
            _id,
            category_id,    
            amount,
            description,
            type
        }) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const RecordById = await updateRecordById({
                    category_id,    
                    amount,
                    description,
                    type
                },{_id})
                  console.log('Record by ID from request was updated', RecordById);

                dispatch('getRecord')
                commit('setLoading', false)
                return RecordById;
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