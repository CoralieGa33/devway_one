import React from 'react';
import PropTypes from 'prop-types';

import './counter.scss';

const Counter = ({ nbTasks}) => (
    <div className="counter-container">
        <p>{nbTasks} {nbTasks <= 1 ? 'tâche' : 'tâches'} en cours</p>
    </div>
);

Counter.propTypes = {
    nbTasks: PropTypes.number,
};

export default Counter;