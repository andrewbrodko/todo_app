import { connect } from 'react-redux';
import TaskBar from '../components/TaskBar';

export default connect(
    state => ({
        repository: state.repository
    }),
    dispatch => ({ })
)(TaskBar)
