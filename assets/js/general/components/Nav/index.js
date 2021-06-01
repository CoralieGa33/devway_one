import React from 'react';
//import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './nav.scss';

const Nav = () => {
    
    return (
        <ul className="navigation">
            <NavLink exact to="/" className="navigation-link">Accueil</NavLink>
            <NavLink exact to="/cv" className="navigation-link">Mon parcours</NavLink>
            <NavLink exact to="/realisations" className="navigation-link">Mes réalisations</NavLink>
        </ul>
    );
};

Nav.propTypes = {
};

export default Nav;