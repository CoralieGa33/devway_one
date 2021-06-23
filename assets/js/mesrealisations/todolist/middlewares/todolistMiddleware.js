import axios from 'axios';

import {
    FETCH_TASKS,
    saveTasksList,
    countTasks,
    SET_NEWTASK,
    fetchTasks,
    resetInputNewtask,
    UPDATE_TASK,
} from '/assets/js/mesrealisations/todolist/actions/todolistActions';

const todolistMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case FETCH_TASKS:
            axios.get(`/api/todolist`)
            .then((response) => {
                store.dispatch(saveTasksList(response.data));
                store.dispatch(countTasks(response.data.filter((task) => !task.done).length));
            })
            .catch((error) => {
                console.warn(error.message);
            });
            break;
        case SET_NEWTASK:
            axios.post(`/api/todolist/add`, store.getState().todolist.newTaskName)
            .then(() => {
                store.dispatch(fetchTasks());
                store.dispatch(resetInputNewtask());
            })
            .catch((error) => {
                console.warn(error);
            });
            break;
        case UPDATE_TASK:
            axios.put(`/api/todolist/update/${store.getState().todolist.currentTaskId}`, {
                done: store.getState().todolist.currentTaskDone,
                favorite: store.getState().todolist.currentTaskFavorite,
            })
            .then(() => {
                store.dispatch(fetchTasks());
                store.dispatch(resetInputNewtask());
            })
            .catch((error) => {
                console.warn(error);
            });
            break;
        default:
            next(action);
    }
};

export default todolistMiddleware;