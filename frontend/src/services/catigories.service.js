import { request } from './generic.service';

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
