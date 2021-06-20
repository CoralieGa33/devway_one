import React from 'react';
import PropTypes from 'prop-types';

import './elementsList.scss';

const ElementsList = ({
    list,
    loading,
    handleDelete,
    getElementId,
}) => {
    const handleClick = (id) => {
        getElementId(id);
        handleDelete();
    }
    return (
        <div>
            <h2 className="elements-list-title">Ma liste :</h2>
            
            {loading && <div className="loading">Chargement en cours ...</div>}
            {!loading && (
                <ul className="elements-list" >
                    {list.length == 0 && <li className="elements-list-empty">elle est vide !</li>}
                    {list ? list.map((element) => (
                        <li className="elements-list-item" key={element.id}>
                            {element.name}
                            <button className="elements-list-delete" onClick={() => handleClick(element.id)}>X</button>
                        </li>
                    )) : null}
                </ul>
            )}
        </div>
    );
};

ElementsList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            createdAt: PropTypes.string.isRequired,
            updatedAt:PropTypes.string
            }).isRequired,
    ),
    loading: PropTypes.bool.isRequired,
    handleDelete: PropTypes.func.isRequired,
    getElementId: PropTypes.func.isRequired,
};


export default ElementsList;