import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '/assets/js/general/reducers';

import generalMiddleware from '/assets/js/general/middlewares/generalMiddleware';
import makealistMiddleware from '/assets/js/mesrealisations/makealist/middlewares/makealistMiddleware';

const enhancers = composeWithDevTools(
    applyMiddleware(
        generalMiddleware,
        makealistMiddleware
    ),
);

const store = createStore(
    rootReducer,
    enhancers,
);

export default store;