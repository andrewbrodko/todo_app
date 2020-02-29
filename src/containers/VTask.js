import { connect } from 'react-redux';
import { completeTask, removeTask, dragTask, swapTasks, taskClick } from '../actions';
import Task from '../components/Task';

export default connect(
    state => ({
        div_offset: state.description.div_offset
    }),
    dispatch => ({
        completeTask: data => dispatch(completeTask(data)),
        removeTask: id => dispatch(removeTask(id)),
        dragTask: data => dispatch(dragTask(data)),
        swapTasks: data => dispatch(swapTasks(data)),
        taskClick: task => dispatch(taskClick(task)),
    })
)(Task)
