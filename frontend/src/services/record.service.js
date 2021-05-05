import { request } from './generic.service';

const createRecord = (data) => request({ url: `api/record`, method: 'post',  data});
const getRecord = () => request({ url: `api/record`, method: 'get'});

// By ID
const getRecordById = (params) => request({ url: `api/record/` + `${params._id}`, method: 'get'});
const deleteRecordById = (params) => request({ url: `api/record/`+`${params._id}`, method: 'delete'});
const updateRecordById = (data, params) => request({ url: `api/record/`+`${params._id}`, method: 'put', data});

export { 
      getRecord, 
      getRecordById, 
      deleteRecordById, 
      createRecord, 
      updateRecordById
 };
