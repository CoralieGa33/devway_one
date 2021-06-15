import React from 'react';
//import PropTypes from 'prop-types';

import './contact.scss';

import envelope from '/assets/styles/images/envelope.svg';

const Contact = () => {
    
    return (
        <div className="contact-container">
            <h1 className="contact-title">Me contacter :</h1>
            <a href="mailto:coralie.ga33@gmail.com">
                <img
                    className="contact-img"
                    src={envelope}
                    alt="envelope"
                />
            </a>
        </div>
    );
};

Contact.propTypes = {
};

export default Contact;