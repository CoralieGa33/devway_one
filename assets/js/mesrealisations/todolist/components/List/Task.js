import React from 'react';
import PropTypes from 'prop-types';
import { Star } from 'react-feather';

const Task = () => {
    const favorite =true;
    const color = favorite ? 'orange' : 'grey';

    return (
        <li className="task-container">
            <input className="task-container-checkbox" type="checkbox" />
            <label className="task-container-task">Une tâche</label>
            <div className="task-container-fav"><Star color={color} /></div>
        </li>
    )
};

export default Task;