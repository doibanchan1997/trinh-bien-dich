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