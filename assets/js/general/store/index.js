import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '/assets/js/general/reducers';

import generalMiddleware from '/assets/js/general/middlewares/generalMiddleware';
import makealistMiddleware from '/assets/js/mesrealisations/makealist/middlewares/makealistMiddleware';
import todolistMiddleware from '/assets/js/mesrealisations/todolist/middlewares/todolistMiddleware';

const enhancers = composeWithDevTools(
    applyMiddleware(
        generalMiddleware,
        makealistMiddleware,
        todolistMiddleware
    ),
);

const store = createStore(
    rootReducer,
    enhancers,
);

export default store;