import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

function Task({ state, refL, div_offset, completeTask, removeTask, dragTask, swapTasks, taskClick, toggleTask }) {
    const dueStyling = due => {
        var now = new Date();
        switch (true) {
        case state.completed:
            return "task completed";
        case due < now:
            return "task overdueing";
        case due < new Date(now.getTime() + 86400000 * 3):
            return "task upcoming";
        default:
            return "task";
        }
    };
    const clickHandle = (e) => {
        switch (e.target.className) {
        case 'V':
            completeTask(state.id);
            break;
        case 'X':
            removeTask(state.id);
            break;
        default:
            onClick(state.id);
        }
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

    const onDragStart = e => {
        e.dataTransfer.setData('id', state.id);
        dragTask({ id: state.id, dragged: true });
    };
    const onDragEnd = e => {
        dragTask({ id: state.id, dragged: false });
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
    const onClick = () => {
        window.scrollTo(0, div_offset);
        taskClick(state.id);
    };

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };

    return (
        <div className={dueStyling(state.date) + state.style}
            data-id={state.id}
            onDragStart={onDragStart}
            onDragOver={(e) => e.preventDefault()}
            onDragEnd={onDragEnd}
            onDrop={onDrop} draggable>
            <div className="brief" onClick={clickHandle}>
                <h2>{state.head}</h2>
                <p>{state.date.toLocaleDateString(undefined, options)}</p>
            </div>
            <div className="controls">
                <span className="V" onClick={clickHandle}>V</span>
                <span className="X" onClick={clickHandle}>X</span>
            </div>
        </div>
    );
}

Task.propTypes = {
    state: PropTypes.shape({
        id: PropTypes.number.isRequired,
        head: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date).isRequired,
        style: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
    div_offset: PropTypes.number.isRequired,
    completeTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
    dragTask: PropTypes.func.isRequired,
    swapTasks: PropTypes.func.isRequired,
    taskClick: PropTypes.func.isRequired
}

export default Task
