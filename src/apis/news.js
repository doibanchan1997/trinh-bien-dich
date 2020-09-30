import axiosService from './../commons/axiosService'; 
import {API_ENDPOINT} from './../constants/index';
import qs from 'query-string';
const url = 'news';

//http://localhost:3000/tasks
export const getList = (page, limit) => {
    // let queryParams = 
    // if(page && limit){
    //     queryParams = `?_page=${page}&_limit=${limit}`;
    // }
    return axiosService.get(`${API_ENDPOINT}/${url}?_page=${page}%_limit=${limit}`);
}; 
export const addNews = data => {
    return axiosService.post(`${API_ENDPOINT}/${url}`, data)
}
