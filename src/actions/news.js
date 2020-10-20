import * as newsConstants from "./../constants/new";
export const fetchListNews = () =>{
    return {
        type: newsConstants.FETCH_NEWS
    }
}
export const fetchListNewsSuccess = (data) => {
    return {
        type: newsConstants.FETCH_NEWS_SUCCESS,
        payload : {
            data
        }
    }
}
export const fetchListNewsError = (error)=> {
    return {
        type: newsConstants.FETCH_NEWS_ERROR,
        payload: {
            error
        }
    }
}

// ADD NEWS;
 export const addNews =  (titleNews , authorNews, nameNews, news)=>{
     return {
         type: newsConstants.ADD_NEWS,
        payload: {
            titleNews,
            authorNews,
            nameNews,
            news,
        }
     }
 }
 export const addNewsSuccess = data =>{
     return {
         type: newsConstants.ADD_NEWS_SUCCESS,
         payload: {
             data,
         }
     }
 }

 export const addNewsError = error => {
     return {
         type: newsConstants.ADD_NEWS_ERROR,
         payload: {
            error,
        }
     }
 }

 // update news
 export const updateNews = (titleNews, nameNews, news, authorNews ) => {
     return {
         type: newsConstants.UPDATE_NEWS,
         payload: {
            titleNews,
            nameNews,
            authorNews,
            news
         }
     }
 }
 export const updateNewsSuccess = (data) => {
     return {
         type: newsConstants.UPDATE_NEWS_SUCCESS,
         payload: {
             data
         }
     }
 }
 export const updateNewsError = (error) => {
     return {
         type: newsConstants.UPDATE_NEWS_ERROR,
         payload: {
             error
         }
     }
 }

 export const deleteNews = (id) => {
     return {
         type: newsConstants.DELETE_NEWS,
         payload:{
            id,
         }
     }
 }
 
 export const deleteNewsSuccess = (data) => {
     return {
         type: newsConstants.DELETE_NEWS_SUCCESS,
         payload:{
             data,
         }
     }
 }

 export const deleteNewsError = (error) => {
     return {
         type: newsConstants.FETCH_NEWS_ERROR,
         payload : {
             error,
         }
     }
 }

 export const setNewsEditing = (news) =>{
     return {
         type: newsConstants.SET_NEWS_EDITING,
         payload: {
             news,
         }
     }
 }