import { connect } from 'react-redux';

import TasksList from '/assets/js/mesrealisations/todolist/components/TasksList';

import { getTaskInfos, updateTask, toogleTaskDone, toogleTaskFavorite, resetCurrentTask } from '/assets/js/mesrealisations/todolist/actions/todolistActions';

const mapStateToProps = (state) => ({
    tasksList: state.todolist.tasksList,
    loading: state.todolist.loading,
});

const mapDispatchToProps = (dispatch) => ({
    getTaskInfos: (id, name, done, favorite) => {
        dispatch(getTaskInfos(id, name, done, favorite));
    },
    updateTask: () => {
        dispatch(updateTask());
    },
    toogleTaskDone: () => {
        dispatch(toogleTaskDone());
    },
    toogleTaskFavorite: () => {
        dispatch(toogleTaskFavorite());
    },
    resetCurrentTask: () => {
        dispatch(resetCurrentTask());
    },
});

const TasksListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TasksList);

export default TasksListContainer;