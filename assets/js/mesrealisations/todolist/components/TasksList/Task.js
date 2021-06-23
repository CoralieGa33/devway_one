import React from 'react';
import PropTypes from 'prop-types';
import { Star } from 'react-feather';

const Task = ({
    task,
    getTaskInfos,
    updateTask,
    toogleTaskDone,
    toogleTaskFavorite,
    resetCurrentTask,
}) => {
    const handleChangeDone = (id, name, done, favorite) => {
        getTaskInfos(id, name, done, favorite);
        toogleTaskDone();
        updateTask();
        resetCurrentTask();
    }
    const handleChangeFavorite = (id, name, done, favorite) => {
        getTaskInfos(id, name, done, favorite);
        toogleTaskFavorite();
        updateTask();
        resetCurrentTask();
    }
    return (
        <li className="task-container" key={task.id}>
            <input className="checkbox" type="checkbox" checked={task.done} onChange={() => handleChangeDone(task.id, task.name, task.done, task.favorite)}/>
            <label className={task.done ? 'task task--done': 'task'}>{task.name}</label>
            <button className="fav"><Star color={task.favorite ? 'orange' : 'grey'} onClick={() => handleChangeFavorite(task.id, task.name, task.done, task.favorite)}/></button>
        </li>
    )
};

Task.propTypes = {
    task: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            done: PropTypes.bool.isRequired,
            favorite: PropTypes.bool.isRequired,
            createdAt: PropTypes.string.isRequired,
            updatedAt:PropTypes.string
            }).isRequired,
    getTaskInfos: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    toogleTaskDone: PropTypes.func.isRequired,
    toogleTaskFavorite: PropTypes.func.isRequired,
    resetCurrentTask: PropTypes.func.isRequired,
};

export default Task;