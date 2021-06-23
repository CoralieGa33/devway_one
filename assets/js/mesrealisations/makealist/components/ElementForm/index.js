import React from 'react';
import PropTypes from 'prop-types';

import './elementForm.scss';

const ElementForm = ({
    newElement,
    changeInputElement,
    handleAdd,
    handleDeleteAll,
}) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (newElement) {
            handleAdd();
        }
    };
    const handleChange = (evt) => {
        changeInputElement(evt.target.value);
    };
    const handleClick = (evt) => {
        evt.preventDefault();
        handleDeleteAll();
    }
    return (
        <div>
            <form className="element-form" onSubmit={handleSubmit}>
                <input name="newElement" type="text" className="element-form-input" placeholder="Saisir un nouvel élément..." onChange={handleChange} value={newElement} />
                <button type="submit" className="element-form-button">Ajouter !</button>
                <button className="element-form-clean" onClick={handleClick}>Vider la liste</button>          
            </form>    
        </div>
    );
};

ElementForm.propTypes = {
    newElement: PropTypes.string.isRequired,
    handleAdd: PropTypes.func.isRequired,
    changeInputElement: PropTypes.func.isRequired,
    handleDeleteAll: PropTypes.func.isRequired,
};

export default ElementForm;