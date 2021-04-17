import { request } from './generic.service';
import { authHeader } from '../helper/auth-header';

let config = {
  headers:authHeader()
      
//   {
//       'Content-Type': 'application/json;charset=UTF-8',
//       "Access-Control-Allow-Origin": "*",
//   }
}; 

const createAd = data => request({ url: `api/ad`, method: 'post', data, config});
const fetchAd = data => request({ url: `api/ad`, method: 'get', data, config});

export { createAd, fetchAd };
