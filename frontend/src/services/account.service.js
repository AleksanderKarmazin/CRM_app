import { request } from './generic.service';

const createAccount = (data) => request({ url: `api/account`, method: 'post',  data});
const getAccount = () => request({ url: `api/account`, method: 'get'});

// By ID
const getAccountById = (params) => request({ url: `api/account/` + `${params._id}`, method: 'get'});
const deleteAccountById = (params) => request({ url: `api/account/`+`${params._id}`, method: 'delete'});
const updateAccountById = (data, params) => request({ url: `api/account/`+`${params._id}`, method: 'put', data});

export { 
      getAccount, 
      getAccountById, 
      deleteAccountById, 
      createAccount, 
      updateAccountById
 };
