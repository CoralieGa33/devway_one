import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

import './tasksList.scss';

const TasksList = ({
    tasksList,
    loading,
    getTaskInfos,
    updateTask,
    toogleTaskDone,
    toogleTaskFavorite,
    resetCurrentTask,
    deleteTask,
}) => (
    <div>
        {loading && <div className="loading">Chargement en cours ...</div>}
        {!loading && (
            <ul className="list-container">
                {tasksList ? tasksList.map((task) => (
                    <Task 
                        key={task.id}
                        task={task}
                        getTaskInfos={getTaskInfos}
                        updateTask={updateTask}
                        toogleTaskDone={toogleTaskDone}
                        toogleTaskFavorite={toogleTaskFavorite}
                        resetCurrentTask={resetCurrentTask}
                        deleteTask={deleteTask}
                    />
                )) : null }
            </ul>
        )}
    </div>
);


TasksList.propTypes = {
    tasksList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            done: PropTypes.bool.isRequired,
            favorite: PropTypes.bool.isRequired,
            createdAt: PropTypes.string.isRequired,
            updatedAt:PropTypes.string
            }).isRequired,
    ),
    loading: PropTypes.bool.isRequired,
    getTaskInfos: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    toogleTaskDone: PropTypes.func.isRequired,
    toogleTaskFavorite: PropTypes.func.isRequired,
    resetCurrentTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
};

export default TasksList;