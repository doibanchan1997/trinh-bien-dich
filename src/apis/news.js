import axiosService from './../commons/axiosService'; 
import {API_ENDPOINT} from './../constants/index';
import qs from 'query-string';
const url = 'news';

//http://localhost:3000/tasks
export const getList = (params = {}) => {
    // let queryParams = '';
    // if(Object.keys(params).length >0){
    //     queryParams = `?${qs.stringify(params)}`;
    // }
    return axiosService.get(`${API_ENDPOINT}/${url}`);
}; 