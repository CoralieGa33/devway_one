import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import TaskForm from '/assets/js/mesrealisations/todolist/containers/TaskForm';
import Counter from '/assets/js/mesrealisations/todolist/containers/Counter';
import TasksList from '/assets/js/mesrealisations/todolist/containers/TasksList';

import './todoList.scss';

// == Composant
const Todolist = ({ fetchTasks }) => {
    useEffect(() => {
        fetchTasks();
    }, []);
    return (
        <div className="todolist-container">
            <h1 className="todolist-title">TodoList</h1>
            <TaskForm />
            <Counter  />
            <TasksList />
        </div>
    );
};

Todolist.propTypes = {
    fetchTasks: PropTypes.func.isRequired,
};

export default Todolist;