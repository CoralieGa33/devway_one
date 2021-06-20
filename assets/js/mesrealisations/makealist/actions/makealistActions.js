// action types
export const FETCH_ELEMENTS = 'FETCH_ELEMENTS';
export const SAVE_ELEMENTS_LIST = 'SAVE_ELEMENTS_LIST'
export const CHANGE_INPUT_ELEMENT = 'CHANGE_INPUT_ELEMENT';
export const SET_NEW_ELEMENT = 'SET_NEW_ELEMENT';
export const RESET_INPUT_ELEMENT = 'RESET_INPUT_ELEMENT';
export const GET_ELEMENT_ID = 'GET_ELEMENT_ID';
export const DELETE_ELEMENT = 'DELETE_ELEMENT';
export const DELETE_ALL_ELEMENTS = 'DELETE_ALL_ELEMENTS';

// action creators
export const fetchElements = () => ({
    type: FETCH_ELEMENTS,
});
export const saveElementsList = (elementsList) => ({
    type: SAVE_ELEMENTS_LIST,
    elementsList,
})
export const changeInputElement = (value) => ({
    type: CHANGE_INPUT_ELEMENT,
    value,
});
export const setNewElement = () => ({
    type: SET_NEW_ELEMENT,
});
export const resetInputElement = () => ({
    type: RESET_INPUT_ELEMENT,
});
export const getElementId = (id) => ({
    type: GET_ELEMENT_ID,
    id,
});
export const deleteElement = () => ({
    type: DELETE_ELEMENT,
});
export const deleteAllElements = () => ({
    type: DELETE_ALL_ELEMENTS,
});
