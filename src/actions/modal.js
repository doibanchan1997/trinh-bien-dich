import *as modalType from './../constants/modal';
export const showModal  = () => ({
    type: modalType.SHOW_MODAL,
});
export const hiddenModal = () =>({
    type: modalType.HIDDEN_MODAL,
})
export const changeModalTitle  = (title) => ({
    type: modalType.CHANGE_MODAL_TITLE,
    payload: {
        title
    },
});
export const changeModalContent = (component) =>({
    type: modalType.CHANGE_MODAL_CONTENT,
    payload:{
        component
    }
})