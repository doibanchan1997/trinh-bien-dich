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