import { connect } from 'react-redux';

import ElementForm from '/assets/js/mesrealisations/makealist/components/ElementForm';

import { changeInputElement, setNewElement, deleteAllElements } from '/assets/js/mesrealisations/makealist/actions/makealistActions';

const mapStateToProps = (state) => ({
    newElement: state.makealist.newElement,
});

const mapDispatchToProps = (dispatch) => ({
    changeInputElement: (value) => {
        dispatch(changeInputElement(value));
    },
    handleAdd: () => {
        dispatch(setNewElement());
    },
    handleDeleteAll: () => {
        dispatch(deleteAllElements());
    }
});

const ElementFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ElementForm);

export default ElementFormContainer;