import { combineReducers } from 'redux';

// Reducers import
import generalReducer from './generalReducer';
import realisationsReducer from '/assets/js/realisations/reducers/realisationsReducer';
import makealistReducer from '/assets/js/mesrealisations/makealist/reducers/makealistReducer';

const rootReducer = combineReducers({
    general: generalReducer,
    realisations: realisationsReducer,
    makealist: makealistReducer,
});


export default rootReducer;
