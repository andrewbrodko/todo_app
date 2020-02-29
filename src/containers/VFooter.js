import { connect } from 'react-redux';
import { onFooterLoaded } from '../actions';
import Footer from '../components/Footer';

export default connect(
    state => ({
        footer: state.footer
    }),
    dispatch => ({
        onFooterLoaded: isLoaded => dispatch(onFooterLoaded(isLoaded))
    })
)(Footer)
