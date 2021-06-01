import React from 'react';

import './footer.scss';

const Footer = () => {
    
    return (
        <ul className="link-list">
            <li className="who">Réalisé par Coralie Gargot - 2021</li>
            <span>&#8275;</span>
            <li className="link"><a href="https://github.com/CoralieGa33" target="_blank" rel="noreferrer">Mon GitHub</a></li>
            <span>&#8275;</span>
            <li className="link"><a href="https://www.linkedin.com/in/CoralieGa33" target="_blank" rel="noreferrer">Mon profil LinkedIn</a></li>
        </ul>
    );
};

export default Footer;