import { connect } from 'react-redux';
import { submitRef, submitTask } from '../actions';
import Description from '../components/Description';

export default connect(
    state => {
        var task = state.repository.filter(t => t.id === state.description.id)[0];
        if (task) {
            return { task: task };
        } else {
            var date = new Date();
            date.setDate(date.getDate() + 1);
            return { task : { head: ' ', text: ' ', date: date } };
        }
    },
    dispatch => ({
        submitRef: ref => dispatch(submitRef(ref)),
        submitTask: task => dispatch(submitTask(task))
    })
)(Description)
