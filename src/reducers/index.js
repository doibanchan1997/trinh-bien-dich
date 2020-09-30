import { combineReducers } from "redux";
import newsReducer from "./news";
import modalReducer from "./modal";
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    news: newsReducer,
    modal: modalReducer,
    form: formReducer
});
export default rootReducer;
