import axios from 'axios'

const API_URL = 'http://localhost:5000'

// import { authHeader } from '../helper/auth-header';
// let user = JSON.parse(localStorage.getItem('user'));
// let authH = {'authorization': 'Bearer ' + user.token}
// let config = {headers:authH}
  
      
//   {
//       'Content-Type': 'application/json;charset=UTF-8',
//       "Access-Control-Allow-Origin": "*",
//   }
// };

// const requestOptions = {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({ email, password })
// }; 

export const request = async ({ url, method, data={}, config}) => {
  const response = await axios[method](
    
    `${API_URL}/${url}`
    
    , data, config) 
  return response.data
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
