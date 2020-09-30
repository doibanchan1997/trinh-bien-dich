import * as newsConstants from './../constants/new';
const newInitialState = {
    listNews: [],
    newsEditing: null
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
        case newsConstants.ADD_NEWS: {
            return {
                ...state,
            }
        }    
        case newsConstants.ADD_NEWS_SUCCESS: {
            const {data} = action.payload;
            return {
                ...state,
                listNews:[data].concat(state.listNews),
            
            }
        }
        case newsConstants.ADD_NEWS_ERROR: {
            const {error} = action.payload
            return {
                ...state,
            }
        }
        case newsConstants.UPDATE_NEWS: {
            return {
                ...state,
            }
        }
        case newsConstants.UPDATE_NEWS_SUCCESS: {
            const {data} = action.payload;
            const {listNews} =state;
            const index = listNews.findIndex(item => item.id ===data.id);
            if(index !==-1){
                const newList = [
                ...listNews.slice(0, index), data,
                ...listNews.slice(index+1)
                ];
                return {
                ...state,
                listNews: newList
                }
            }
            return {
                ...state
            }
        }
        case newsConstants.SET_NEWS_EDITING: {
            const {news} = action.payload
            return {
                ...state,
                newsEditing: news,
            } 
        }
    
        default:
            return state;
            break;
    }
}
export default newsReducer;