import { connect } from 'react-redux';

import TaskForm from '/assets/js/mesrealisations/todolist/components/TaskForm';

import { changeInputNewtask, setNewtask } from '/assets/js/mesrealisations/todolist/actions/todolistActions';

const mapStateToProps = (state) => ({
    newTaskName: state.todolist.newTaskName,
});

const mapDispatchToProps = (dispatch) => ({
    changeInputNewtask: (value) => {
        dispatch(changeInputNewtask(value));
    },
    handleAdd: () => {
        dispatch(setNewtask());
    },
});

const TaskFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TaskForm);

export default TaskFormContainer;