import React from 'react';
import PropTypes from 'prop-types';

import './counter.scss';

const Counter = ({ nbTasks}) => (
    <div className="counter-container">
        {nbTasks > 0 ?
            <p>Encore {nbTasks} {nbTasks <= 1 ? 'tâche' : 'tâches'} à terminer</p>
            : 
            <p>On dirait qu&apos;il n&apos;y a plus rien à faire ici !</p>}
    </div>
);

Counter.propTypes = {
    nbTasks: PropTypes.number,
};

export default Counter;