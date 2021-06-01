import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import mainMiddleware from '/assets/js/general/middlewares/generalMiddleware';

import generalReducer from '/assets/js/general/reducers';

const enhancers = composeWithDevTools(
    applyMiddleware(
        mainMiddleware,
    ),
);

const store = createStore(
    // reducers
    generalReducer,
    // enhancers
    enhancers,
);

export default store;