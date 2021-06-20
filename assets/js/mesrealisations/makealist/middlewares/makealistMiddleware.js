import axios from 'axios';

import {
    FETCH_ELEMENTS,
    fetchElements,
    saveElementsList,
    SET_NEW_ELEMENT,
    resetInputElement,
    DELETE_ELEMENT,
    DELETE_ALL_ELEMENTS,
} from '/assets/js/mesrealisations/makealist/actions/makealistActions';

const makealistMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case FETCH_ELEMENTS:
            axios.get(`/api/make-a-list`)
            .then((response) => {
                store.dispatch(saveElementsList(response.data));
            })
            .catch((error) => {
                console.warn(error.message);
            });
            break;
        case SET_NEW_ELEMENT:
            axios.post(`/api/make-a-list/add`, store.getState().makealist.newElement)
            .then(() => {
                store.dispatch(fetchElements());
                store.dispatch(resetInputElement());
            })
            .catch((error) => {
                console.warn(error);
            });
            break;
        case DELETE_ELEMENT:
            axios.delete(`/api/make-a-list/delete/${store.getState().makealist.elementId}`)
            .then(() => {
                store.dispatch(fetchElements());
            })
            .catch((error) => {
                console.warn(error);
            });
            break;
        case DELETE_ALL_ELEMENTS:
            axios.delete(`/api/make-a-list/clean`)
            .then(() => {
                store.dispatch(fetchElements());
            })
            .catch((error) => {
                console.warn(error);
            });
            break;
        default:
            next(action);
    }
};

export default makealistMiddleware;