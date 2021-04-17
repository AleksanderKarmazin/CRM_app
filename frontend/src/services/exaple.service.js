import { request } from './generic.service';

const getCategory = id => request({ url: `categories/${id}`, method: 'get' });
const getCategories = () => request({ url: `categories`, method: 'get' });
const userRegisterReq = data => request({ url: `api/users`, method: 'post', data });

export { getCategory, getCategories };
