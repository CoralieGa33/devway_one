// action types
export const FETCH_TASKS = 'FETCH_TASKS';
export const SAVE_TASKS_LIST = 'SAVE_TASKS_LIST';
export const COUNT_TASKS = 'COUNT_TASKS';
export const CHANGE_INPUT_NEWTASK = 'CHANGE_INPUT_NEWTASK';
export const SET_NEWTASK = 'SET_NEWTASK';
export const RESET_INPUT_NEWTASK = 'RESET_INPUT_NEWTASK';
export const GET_TASK_INFOS = 'GET_TASK_INFOS';
export const UPDATE_TASK = 'UPDATE_TASK';
export const TOOGLE_TASK_DONE = 'TOOGLE_TASK_DONE';
export const TOOGLE_TASK_FAVORITE = 'TOOGLE_TASK_FAVORITE';
export const RESET_CURRENT_TASK = 'RESET_CURRENT_TASK';

// action creators
export const fetchTasks = () => ({
    type: FETCH_TASKS,
});
export const saveTasksList = (tasksList) => ({
    type: SAVE_TASKS_LIST,
    tasksList,
});
export const countTasks = (nb) => ({
    type: COUNT_TASKS,
    nb,
});
export const changeInputNewtask = (value) => ({
    type: CHANGE_INPUT_NEWTASK,
    value,
});
export const setNewtask = () => ({
    type: SET_NEWTASK,
});
export const resetInputNewtask = () => ({
    type: RESET_INPUT_NEWTASK,
});
export const getTaskInfos = (id, name, done, favorite) => ({
    type: GET_TASK_INFOS,
    id,
    name,
    done,
    favorite,
});
export const updateTask = () => ({
    type: UPDATE_TASK,
});
export const toogleTaskDone = () => ({
    type: TOOGLE_TASK_DONE,
});
export const toogleTaskFavorite = () => ({
    type: TOOGLE_TASK_FAVORITE,
});
export const resetCurrentTask = () => ({
    type: RESET_CURRENT_TASK,
});
