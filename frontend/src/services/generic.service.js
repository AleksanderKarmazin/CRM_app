import axios from 'axios'
import { config } from './common'

const API_URL = 'http://localhost:5000'



// let user = JSON.parse(localStorage.getItem('user'));
// let axiosConfig = {
//   headers: {
//       'Content-Type': 'application/json;',
//       'authorization': user && user.token ? 'Bearer ' + user.token: null
//   }
// };



// export const request1 = async ({ url, method,  data={}, config={}}) => {

//   const response = await axios[method](

//     `${API_URL}/${url}`, 
    
//      data, config) 
//     console.log('data from generic service',data);
//     console.log('config from generic service', axiosConfig);    
//     console.log('response.data', response.data);
//     console.log('response.status', response.status);
//     console.log('response.statusText', response.statusText);
//     console.log('response.headers', response.headers);
//     console.log('response.conf', response.config);
//   return  response.data

  
// }  






export const request = async ({ url, method, data={}}) => {

let user = JSON.parse(localStorage.getItem('user'));
let headers = null
if (user && user.token) {
    headers = {
        authorization: `Bearer ${user.token}`
  }

} else {
  headers = null
}

  const response = await axios({
    method,
    url : `${API_URL}/${url}`, 
    headers,
    data
  }) 
    // console.log('data from generic service',data);
    // console.log('config from generic service', axiosConfig);    
    // console.log('response.data', response.data);
    // console.log('response.status', response.status);
    // console.log('response.statusText', response.statusText);
    // console.log('response.headers', response.headers);
    // console.log('response.conf', response.config);
  return  response.data

  
}

// var postData = {
//   email: "test@test.com",
//   password: "password"
// };

// let axiosConfig = {
//   headers: {
//       'Content-Type': 'application/json;charset=UTF-8',
//       "Access-Control-Allow-Origin": "*",
//   }
// };

// axios.post('http://<host>:<port>/<path>', postData, axiosConfig)
// .then((res) => {
//   console.log("RESPONSE RECEIVED: ", res);
// })
// .catch((err) => {
//   console.log("AXIOS ERROR: ", err);
// })
