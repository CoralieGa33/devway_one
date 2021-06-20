import { connect } from 'react-redux';

import ElementsList from '/assets/js/mesrealisations/makealist/components/ElementsList';

import { deleteElement, getElementId } from '/assets/js/mesrealisations/makealist/actions/makealistActions';

const mapStateToProps = (state) => ({
    list: state.makealist.elementsList,
    loading: state.makealist.loading,
});

const mapDispatchToProps = (dispatch) => ({
    handleDelete: () => {
        dispatch(deleteElement());
    },
    getElementId: (id) => {
        dispatch(getElementId(id));
    }
});

const ElementsListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ElementsList);

export default ElementsListContainer;