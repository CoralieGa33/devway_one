import React from 'react';

import Task from './Task';
import './list.scss';

const List = () => (
    <ul className="list-container">
        <Task />
        <Task />
    </ul>
);

export default List;