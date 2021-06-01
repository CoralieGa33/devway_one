import React from 'react';
//import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    
    return (
        <ul className="nagigation">
            <li><NavLink to="/" className="navigation-link">Accueil</NavLink></li>
            <li><NavLink to="/cv" className="navigation-link">Mon parcours</NavLink></li>
            <li><NavLink to="/realisations" className="navigation-link">Mes réalisations</NavLink></li>
        </ul>
    );
};

Nav.propTypes = {
};

export default Nav;