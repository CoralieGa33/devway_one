import {
    CHANGE_INPUT_ELEMENT,
    RESET_INPUT_ELEMENT,
    GET_ELEMENT_ID,
    SAVE_ELEMENTS_LIST,
} from '/assets/js/mesrealisations/makealist/actions/makealistActions';

const initialState = {
    elementsList: null,
    newElement: '',
    elementId: null,
    loading: true,
};

const makealistReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_ELEMENT_ID:
            return {
                ...state,
                elementId: action.id,
            };
        case CHANGE_INPUT_ELEMENT:
            return {
            ...state,
            newElement: action.value,
        };
        case RESET_INPUT_ELEMENT:
            return {
                ...state,
                newElement: "",
            }
        case SAVE_ELEMENTS_LIST:
            return {
                ...state,
                elementsList: action.elementsList,
                loading: false,
            };
        default:
            return state;
    }
};

export default makealistReducer;