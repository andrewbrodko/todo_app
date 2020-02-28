import { connect } from 'react-redux';
import { submitAddData, addTask, completeTask, removeTask, dragTask, swapTasks, taskClick, toggleTask } from '../actions'
import TaskList from '../components/TaskList';

const getVisibleTodos = (repository, filter) => {
    return repository;
}

export default connect(
    state => ({
        repository: getVisibleTodos(state.repository, state.visibilityFilter),
        current: state.current,
        pos_description: state.description.pos_description
    }),
    dispatch => ({
        submitAddData: data => dispatch(submitAddData(data)),
        addTask: data => dispatch(addTask(data)),
        completeTask: data => dispatch(completeTask(data)),
        removeTask: id => dispatch(removeTask(id)),
        dragTask: data => dispatch(dragTask(data)),
        swapTasks: data => dispatch(swapTasks(data)),
        taskClick: task => dispatch(taskClick(task)),
        toggleTask: id => dispatch(toggleTask(id))
    })
)(TaskList);
