import React from 'react';
//import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './nav.scss';

const Nav = () => {
    
    return (
        <header>
            <ul className="navigation">
                <NavLink exact to="/" className="navigation-link">Accueil</NavLink>
                <NavLink exact to="/parcours" className="navigation-link">Mon parcours</NavLink>
                <NavLink exact to="/realisations" className="navigation-link">Mes réalisations</NavLink>
                <NavLink exact to="/contact" className="navigation-link">Me contacter</NavLink>
            </ul>
        </header>
    );
};

Nav.propTypes = {
};

export default Nav;