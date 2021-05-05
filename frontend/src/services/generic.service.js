import axios from 'axios'

const API_URL = 'http://localhost:5000'

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

  return  response.data

  
}

