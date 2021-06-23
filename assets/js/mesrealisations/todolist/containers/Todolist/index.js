import { connect } from 'react-redux';

import Todolist from '/assets/js/mesrealisations/todolist/components/Todolist';

import { fetchTasks } from '/assets/js/mesrealisations/todolist/actions/todolistActions';


const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
    fetchTasks: () => {
        dispatch(fetchTasks());
    },
});

// création du composant container
const TodolistContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Todolist);

export default TodolistContainer;