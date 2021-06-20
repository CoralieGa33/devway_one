import { connect } from 'react-redux';

import Makealist from '/assets/js/mesrealisations/makealist/components/Makealist';

import { fetchElements } from '/assets/js/mesrealisations/makealist/actions/makealistActions';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
    fetchElements: () => {
        dispatch(fetchElements());
    }
});

const MakealistContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Makealist);

export default MakealistContainer;