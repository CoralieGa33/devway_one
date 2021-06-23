import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';

const TaskForm = ({
    newTaskName,
    changeInputNewtask,
    handleAdd,
}) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (newTaskName) {
            handleAdd();
        }
    };
    const handleChange = (evt) => {
        changeInputNewtask(evt.target.value);
    };
    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                name="newTask"
                className="task-form-input"
                type="text"
                placeholder="Ajouter une tâche ..."
                onChange={handleChange}
                value={newTaskName}
            />
        </form>
    );
};

TaskForm.propTypes = {
    newTaskName: PropTypes.string.isRequired,
    changeInputNewtask: PropTypes.func.isRequired,
    handleAdd: PropTypes.func.isRequired,
};

export default TaskForm;
