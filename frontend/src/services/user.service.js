import { request } from './generic.service';

const userRegisterReq = (data) => request({ url: `api/users`, method: 'post', data });
const userLoginReq = (data) => request({ url: `api/users/login`, method: 'post', data });

export { 
    userRegisterReq,
    userLoginReq
};
