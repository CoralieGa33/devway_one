import {
    SAVE_TASKS_LIST,
    COUNT_TASKS,
    CHANGE_INPUT_NEWTASK,
    RESET_INPUT_NEWTASK,
    GET_TASK_INFOS,
    TOOGLE_TASK_DONE,
    TOOGLE_TASK_FAVORITE,
    RESET_CURRENT_TASK,
} from '/assets/js/mesrealisations/todolist/actions/todolistActions';

const initialState = {
    tasksList: [],
    nbTasks: 0,
    newTaskName: '',
    currentTaskId: null,
    currentTaskName: '',
    currentTaskDone: '',
    currentTaskFavorite: '',
    loading: true,
};

const todolistReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SAVE_TASKS_LIST:
            return {
                ...state,
                tasksList: action.tasksList,
            };
        case COUNT_TASKS:
            return {
                ...state,
                nbTasks: action.nb,
                loading: false,
            };
        case CHANGE_INPUT_NEWTASK:
            return {
            ...state,
            newTaskName: action.value,
        };
        case RESET_INPUT_NEWTASK:
            return {
                ...state,
                newTaskName: "",
            };
        case GET_TASK_INFOS:
            return {
                ...state,
                currentTaskId: action.id,
                currentTaskName: action.name,
                currentTaskDone: action.done,
                currentTaskFavorite: action.favorite,
            };
        case TOOGLE_TASK_DONE:
            return {
                ...state,
                currentTaskDone: !state.currentTaskDone
            };
        case TOOGLE_TASK_FAVORITE:
            return {
                ...state,
                currentTaskFavorite: !state.currentTaskFavorite
            };
        case RESET_CURRENT_TASK:
            return {
                ...state,
                currentTaskId: null,
                currentTaskName: '',
                currentTaskDone: null,
                currentTaskFavorite: null,
            }
        default:
            return state;
    }
};

export default todolistReducer;