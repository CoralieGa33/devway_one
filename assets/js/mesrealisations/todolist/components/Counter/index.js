import React from 'react';
import PropTypes from 'prop-types';

import './counter.scss';

const Counter = ({ nbTasks }) => (
    <div className="counter-container">
        {nbTasks} {nbTasks <= 1 ? 'tâche' : 'tâches'} en cours
    </div>
);

Counter.propTypes = {
    nbTasks: PropTypes.number.isRequired,
};

export default Counter;