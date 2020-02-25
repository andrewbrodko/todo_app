import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types'
import './TaskList.css';
import Task from './Task';

function TaskList({ repository, current, pos_description, submitAddData, addTask, taskClick }) {
    const refH = useRef();
    const refL = useRef();
    const refT = useRef();
    const refDD = useRef();
    const refHH = useRef();
    useEffect(() => {
        refH.current.value = current.head;
        refT.current.value = current.text;
        refDD.current.value = current.date;
        refHH.current.value = current.time;
        refL.current.scrollTo(0, 0);
    });

    const submitHead = e => {
        submitAddData({ head: e.target.value });
    };
    const submitText = e => {
        submitAddData({ text: e.target.value });
    };
    const submitDate = e => {
        console.log(e.target.value);
        submitAddData({ date: e.target.value });
    };
    const submitTime = e => {
        console.log(e.target.value);
        submitAddData({ time: e.target.value });
    };
    return (
        <div className="taskBar">
            <div className="list" ref={refL}>
                {repository.map(task => (
                    <Task key={task.id} {...{ ...task, head: task.id + '#' + task.head, pos_description: pos_description }} taskClick={() => taskClick(task)} />
                ))}
            </div>
            <div className="adder">
                <span>
                Task Text:
                <div className="text">
                    <input type="text" id="headInsert" placeholder="caption" onChange={submitHead} ref={refH} autoFocus={true} autoComplete="off" ></input>
                    <input type="text" onChange={submitText} ref={refT} id="textInsert" placeholder="content" autoComplete="off" ></input>
                </div>
                </span>
                <span>
                Due Date:
                <div className="date">
                    <input type="date" required={true} onChange={submitDate} ref={refDD} ></input>
                    <input type="time" required={true} onChange={submitTime} ref={refHH} ></input>
                </div>
                </span>
                <span>
                    <div className="addTask" onClick={() => addTask(current)} >Add task</div>
                </span>
            </div>
        </div>);
}

TaskList.propTypes = {
    repository: PropTypes.arrayOf(
        PropTypes.shape({
            head: PropTypes.string.isRequired,
            date: PropTypes.instanceOf(Date).isRequired
        }).isRequired
    ).isRequired,
    current:PropTypes.shape({
        head: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired
    }).isRequired,
    pos_description: PropTypes.number.isRequired,
    submitAddData: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired,
    taskClick: PropTypes.func.isRequired
}

export default TaskList;
