import axios from 'axios';

import { } from '/assets/js/general/actions/generalActions';

const mainMiddleware = (store) => (next) => (action) => {
    //console.log('on a intercept√© une action dans le middleware: ', action);

    switch (action.type) {
        
        default:
            next(action);
    }
};
export default mainMiddleware;