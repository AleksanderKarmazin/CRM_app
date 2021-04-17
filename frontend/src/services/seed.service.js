import { request } from './generic.service';

// const getCategory = id => request({ url: `categories/${id}`, method: 'get' });
const getSeeds = () => request({ url: `api/seeds`, method: 'get' });
// const userRegisterReq = data => request({ url: `api/users`, method: 'post', data });

export { getSeeds };
