import { connect } from 'react-redux';
import { completeTask, removeTask, dragTask, swapTasks, taskClick } from '../actions';
import Task from '../components/Task';

export default connect(
    state => ({
        pos_description: state.description.pos_description
    }),
    dispatch => ({
        completeTask: data => dispatch(completeTask(data)),
        removeTask: id => dispatch(removeTask(id)),
        dragTask: data => dispatch(dragTask(data)),
        swapTasks: data => dispatch(swapTasks(data)),
        taskClick: task => dispatch(taskClick(task)),
    })
)(Task)
