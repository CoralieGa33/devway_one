import axios from 'axios';

import { } from '/assets/js/contact/actions/contactActions';

const contactMiddleware = (store) => (next) => (action) => {
    //console.log('on a intercepté une action dans le middleware: ', action);

    switch (action.type) {
        
        default:
            next(action);
    }
};
export default contactMiddleware;