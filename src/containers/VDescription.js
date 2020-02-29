import { connect } from 'react-redux';
import { submitPos, submitTask } from '../actions';
import Description from '../components/Description';

const getTask = (state) => {
    var task = state.repository.filter(t => t.id === state.description.id)[0];
    if (task) {
        return task;
    } else {
        var date = new Date();
        date.setDate(date.getDate() + 1);
        return { head: ' ', text: ' ', date: date };
    }
}

export default connect(
    state => ({
        task: getTask(state)
    }),
    dispatch => ({
        submitPos: offset => dispatch(submitPos(offset)),
        submitTask: task => dispatch(submitTask(task))
    })
)(Description)
