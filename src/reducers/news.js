import * as newsConstants from './../constants/new';
const newInitialState = {
    listNews: [],
}
const newsReducer = (state = newInitialState, action) => {
    switch (action.type) {
        case newsConstants.FETCH_NEWS: {
            return{
                ...state,
                listNews: [],
            }
        }
        case newsConstants.FETCH_NEWS_SUCCESS: {
            const {data} = action.payload;
            return {
                ...state,
                listNews: data,
            }
        }
        case newsConstants.FETCH_NEWS_ERROR: {
            return {
                ...state,
                listNews: []
            }
        }    
        
    
        default:
            return state;
            break;
    }
}
export default newsReducer;