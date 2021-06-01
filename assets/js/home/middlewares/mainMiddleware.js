import axios from 'axios';

import { } from '/assets/js/home/actions/main';

const mainMiddleware = (store) => (next) => (action) => {
    //console.log('on a intercepté une action dans le middleware: ', action);

    switch (action.type) {
        
        default:
            next(action);
    }
};
export default mainMiddleware;