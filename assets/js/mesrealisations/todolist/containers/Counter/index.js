import { connect } from 'react-redux';

import Counter from '/assets/js/mesrealisations/todolist/components/Counter';

import {  } from '/assets/js/mesrealisations/todolist/actions/todolistActions';


const mapStateToProps = (state) => ({
    nbTasks: state.todolist.nbTasks,
});

const mapDispatchToProps = () => ({
});

// création du composant container
const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Counter);

export default CounterContainer;