import React from 'react';

// == Import
import Form from '/assets/js/mesrealisations/todolist/components/Form';
import Counter from '/assets/js/mesrealisations/todolist/components/Counter';
import List from '/assets/js/mesrealisations/todolist/components/List';

import './todoList.scss';

// == Composant
const TodoList = () => (
    <div className="todolist-container">
        <h1 className="todolist-title">TodoList</h1>
        <Form />
        <Counter nbTasks={2} />
        <List />
    </div>
);

export default TodoList;