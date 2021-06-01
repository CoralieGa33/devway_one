import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import mainMiddleware from '/assets/js/home/middlewares/mainMiddleware';

import reducer from '/assets/js/home/reducers/main';

const enhancers = composeWithDevTools(
    applyMiddleware(
        mainMiddleware,
    ),
);

const store = createStore(
    // reducers
    reducer,
    // enhancers
    enhancers,
);

export default store;