
// import { config } from './common'
import { request } from './generic.service';
// import {authHeader } from '../helper/auth-header';



// let config = {
//   headers:authHeader()
      
// //   {
// //       'Content-Type': 'application/json;charset=UTF-8',
// //       "Access-Control-Allow-Origin": "*",
// //   }
// }; 

// var postData = {
//   email: "test@test.com",
//   password: "password"
// };

// let user = JSON.parse(localStorage.getItem('user'));
// let axiosConfig = {
//   headers: {
//       'Content-Type': 'application/json;',
//       'authorization': user && user.token ? 'Bearer ' + user.token: null
//   }
// };


// axios.post('http://<host>:<port>/<path>', postData, axiosConfig)
// .then((res) => {
//   console.log("RESPONSE RECEIVED: ", res);
// })
// .catch((err) => {
//   console.log("AXIOS ERROR: ", err);
// })

const createCatigory = (data) => request({ url: `api/catigories`, method: 'post',  data});
const getCatigories = () => request({ url: `api/catigories`, method: 'get'});

// By ID
const getCatigoriesById = (params) => request({ url: `api/catigories/` + `${params._id}`, method: 'get'});
const deleteCatigoriesById = (params) => request({ url: `api/catigories/`+`${params._id}`, method: 'delete'});
const updateCatigoryById = (data, params) => request({ url: `api/catigories/`+`${params._id}`, method: 'put', data});

export { 

      getCatigories, 
      getCatigoriesById, 
      deleteCatigoriesById, 
      createCatigory, 
      updateCatigoryById
 };
