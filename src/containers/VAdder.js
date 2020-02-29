import { connect } from 'react-redux';
import { addData, addTask } from '../actions';
import Adder from '../components/Adder';

export default connect(
    state => ({
        current: state.current
    }),
    dispatch => ({
        addData: data => dispatch(addData(data)),
        addTask: data => dispatch(addTask(data)),
    })
)(Adder)
