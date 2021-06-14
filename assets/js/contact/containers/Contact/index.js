import { connect } from 'react-redux';

import Contact from '/assets/js/contact/components/Contact';

import { } from '/assets/js/contact/actions/contactActions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

const ContactContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Contact);

export default ContactContainer;