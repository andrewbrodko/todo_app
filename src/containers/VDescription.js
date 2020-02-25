import { connect } from 'react-redux';
import { submitRef, submitTask } from '../actions'
import Description from '../components/Description';

export default connect(
    state => ({
        task: state.repository.filter(t => t.id === state.description.id)[0]
    }),
    dispatch => ({
        submitRef: ref => dispatch(submitRef(ref)),
        submitTask: task => dispatch(submitTask(task))
    })
)(Description);
