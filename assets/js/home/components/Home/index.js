import React from 'react';

import './home.scss';

import Logo from '/assets/styles/images/logoDevway.png';

const Home = () => {
    
    return (
        <div className="home-container">
            <h1 className="devway-title">DEVWAY</h1>
            <img
                id="devway-logo"
                src={Logo}
                alt="Devway logo"
            />
        </div>
    );
};

Home.propTypes = {
};

export default Home;