import React from 'react';
import { NavLink } from 'react-router-dom';
//import PropTypes from 'prop-types';

import './realisations.scss';

const Realisations = () => {
    
    return (
        <div className="realisations-container">
            <h1>Page en cours de réalisation</h1>
            <p>Revenez voir bientôt !</p>

            {/* Temporary links    */}
            <ul className="mesrealisations-list">
                <NavLink exact to="/make-a-list" className="mesrealisations-link">Fais ta liste</NavLink>
                <NavLink exact to="/todolist" className="mesrealisations-link">TodoList</NavLink>

            </ul>
        </div>
    );
};

Realisations.propTypes = {
};

export default Realisations;