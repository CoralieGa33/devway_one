import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ElementForm from '/assets/js/mesrealisations/makealist/containers/ElementForm';
import ElementsList from '/assets/js/mesrealisations/makealist/containers/ElementsList';

import './makealist.scss';

const Makealist = ({ fetchElements }) => {
    useEffect(() => {
        fetchElements();
    }, []);
    return (
        <div className="makealist-container">
            <h1 className="makealist-title">Fais ta liste !</h1>
            <p className="makealist-todo">et prochainement, la liste sera propre à chaque utilisateur</p>
            
            <ElementForm />

            <ElementsList />
        </div>
    );
};
Makealist.propTypes = {
    fetchElements: PropTypes.func.isRequired,
};

export default Makealist;