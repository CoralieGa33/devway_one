import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import mainMiddleware from '/assets/js/general/middlewares/mainMiddleware';

import reducer from '/assets/js/general/reducers/main';

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