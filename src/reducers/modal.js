import *as modalType from './../constants/modal';
const initialState = {
    show: false
};
const reducer = (state = initialState , action) => {
    switch (action.type) {
        case modalType.SHOW_MODAL: {
            return {
                ...state,
                show: true,
            };
        };
        case modalType.HIDDEN_MODAL: {
            return {
                ...state,
                show: false,
            }
        }
        case modalType.CHANGE_MODAL_TITLE:{
            const {title} = action.payload;
            return {
                ...state,
                title,
            }
        }
        case modalType.CHANGE_MODAL_CONTENT:{
            const {component} = action.payload;
            return {
                ...state,
                component,
            }
        }
        default:
        return state;
    }
}
export default reducer;