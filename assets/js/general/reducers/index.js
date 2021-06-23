import { combineReducers } from 'redux';

// Reducers import
import generalReducer from './generalReducer';
import realisationsReducer from '/assets/js/realisations/reducers/realisationsReducer';
import makealistReducer from '/assets/js/mesrealisations/makealist/reducers/makealistReducer';
import todolistReducer from '/assets/js/mesrealisations/todolist/reducers/todolistReducer';

const rootReducer = combineReducers({
    general: generalReducer,
    realisations: realisationsReducer,
    makealist: makealistReducer,
    todolist: todolistReducer,
});


export default rootReducer;
