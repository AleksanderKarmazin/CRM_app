import axios from 'axios'


export default {
    state: {
        uploadedFile:null
    },
    mutations: {
        setUploade (state, payload) {
            state.uploadedFile = payload
        },
        clearUploadedFile (state) {
            state.uploadedFile = null
        }
    },
    // actions: {
    //     async uploadeFrile({commit },{
    //         formData
    //       }) {
    //         try {
    //           commit('clearError')
    //           commit('clearInfo')
    //           commit('setLoading', true)
    //         //   const config = {
    //         //     headers: {
    //         //         'Content-type': 'multipart/form-data'
    //         //         }
    //         //     }
    //         const { data } = await axios({
    //                 method: 'post',
    //                 url: 'http://localhost:5000/api/upload',
    //                 headers: {
    //                   'Content-Type': 'multipart/form-data',
    //                 },
    //                 data: formData
    //               })
    //         // (
    //         // 'http://localhost:5000/api/upload', formData, config
    //         // )
                


    //             commit('setUploade', data)
    //             console.log("uploaded File data", data); 
    //             commit('setLoading', false)
    //         } catch (error) {
    //             commit('setError', error.response.data.message)
    //             commit('setLoading', false)
    //             console.log('err', error.response.data.message)
    //             console.log('err', error.response.data.stack)
    //             throw error;
    //         }
    //       },
    // },
    getters:{
        uploadedFileData (state) {
            return state.uploadedFile
        },
    }
}