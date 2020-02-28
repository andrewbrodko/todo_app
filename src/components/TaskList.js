import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types'
import './TaskList.css';
import Task from './Task';

function TaskList({ repository, current, pos_description, submitAddData, addTask, completeTask, removeTask, dragTask, swapTasks, taskClick }) {
    const dateMax = '2030-01-01';
    const dateMin = new Date().toISOString().split('T')[0];

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
    });

    const submitHead = e => {
        submitAddData({ head: e.target.value });
    };
    const submitText = e => {
        submitAddData({ text: e.target.value });
    };
    const submitDate = e => {
        if (new Date(e.target.value) < new Date(dateMax).getTime() &&
            new Date(e.target.value) > new Date(dateMin).getTime()) {
                submitAddData({ date: e.target.value });
        }
    };
    const submitTime = e => {
        submitAddData({ time: e.target.value });
    };
    const findTaskNode = target => {
        if (target !== null) {
            if (target.tagName === 'DIV' && target.className.includes('task')) {
                return target;
            } else {
                return findTaskNode(target.parentNode);
            }
        }
    };
    const onClick = task => {
        window.scrollTo(0, pos_description);
        taskClick(task);
    };
    const onDragStart = (e, id) => {
        e.dataTransfer.setData('id', id);
        dragTask({ id: id, dragged: true });
    };
    const onDragEnd = (e, id) => {
        dragTask({ id: id, dragged: false });
    };
    const onDrop = e => {
        refL.current.scrollTo(2000, 2000)
        var node = findTaskNode(e.target);
        if (node !== undefined) {
            var data = [ e.dataTransfer.getData('id'), findTaskNode(e.target).dataset.id ];
            data[0] !== data[1] ? swapTasks(data.map(i => parseInt(i))) : e.preventDefault();
        }
        e.preventDefault();
    };
    const submitTask = () => {
        if (current.header !== '' && current.text !== '') addTask(current);
    }
    return (
        <div className="taskBar">
            <div className="list" ref={refL}>
                <div className="scrollers">
                    <div
                        className="scrollUp"
                        onDragOver={(e) => refL.current.lastChild.firstChild.scrollIntoView({ behavior: "smooth" })}>
                    </div>
                    <div
                        className="scrollDown"
                        onDragOver={(e) => refL.current.lastChild.lastChild.scrollIntoView({ behavior: "smooth" })}>
                    </div>
                </div>
                <div className="contents">
                    {repository.map(task => (
                        <Task
                            key={task.id} {...task}
                            completeTask={() => completeTask(task)}
                            removeTask={() => removeTask(task.id)}
                            onClick={() => onClick(task)}
                            onDragStart = {(e) => onDragStart(e, task.id)}
                            onDragEnd={(e) => onDragEnd(e, task.id)}
                            onDrop={onDrop} />
                    ))}
                </div>
            </div>
            <div className="adder">
                <span>
                Task Text:
                <div className="text">
                    <input
                        type="text"
                        id="headInsert"
                        placeholder="caption"
                        ref={refH}
                        onChange={submitHead}
                        required={true}
                        autoFocus={true}
                        autoComplete="off"></input>
                    <input
                        type="text"
                        id="textInsert"
                        placeholder="content"
                        ref={refT}
                        onChange={submitText}
                        required={true}
                        autoComplete="off"></input>
                </div>
                </span>
                <span>
                Due Date:
                <div className="date">
                    <input
                        type="date"
                        max={dateMax}
                        min={dateMin}
                        ref={refDD}
                        onChange={submitDate}
                        required={true}></input>
                    <input
                        type="time"
                        ref={refHH}
                        onChange={submitTime}
                        required={true}></input>
                </div>
                </span>
                <span>
                    <div className="addTask" onClick={submitTask}>Add task</div>
                </span>
            </div>
        </div>);
}

TaskList.propTypes = {
    repository: PropTypes.arrayOf(
        PropTypes.shape({
            head: PropTypes.string,
            date: PropTypes.instanceOf(Date)
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
    completeTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
    dragTask: PropTypes.func.isRequired,
    swapTasks: PropTypes.func.isRequired,
    taskClick: PropTypes.func.isRequired
}

export default TaskList;
