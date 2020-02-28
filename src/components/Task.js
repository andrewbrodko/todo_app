import React from 'react';
import PropTypes from 'prop-types'
import './Task.css';

function Task({ id, head, date, style, completed, completeTask, removeTask, onClick, onDragStart, onDragEnd, onDrop }) {
    const dueStyling = due => {
        var now = new Date();

        if (completed) {
            return "task completed";
        } else if (due < now) {
            return "task overdueing";
        } else if (due < new Date(now.getTime() + 86400000 * 3)) {
            return "task upcoming";
        }

        return "task";
    };
    const clickHandle = (e) => {
        switch (e.target.className) {
        case 'completeTask':
            completeTask();
            break;
        case 'removeTask':
            removeTask();
            break;
        default:
            onClick();
        }
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
        <div className={dueStyling(date) + style}
            data-id={id}
            onClick={clickHandle}
            onDragStart={onDragStart}
            onDragOver={(e) => e.preventDefault()}
            onDragEnd={onDragEnd}
            onDrop={onDrop} draggable>
            <h2>{head}</h2>
            <p>{date.toLocaleDateString(undefined, options)}</p>
            <div className="controls">
                <span className="completeTask" onClick={clickHandle}>V</span>
                <span className="removeTask" onClick={clickHandle}>X</span>
            </div>
        </div>
    );
}

Task.propTypes = {
    id: PropTypes.number.isRequired,
    head: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    style: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    completeTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    onDragStart: PropTypes.func.isRequired,
    onDragEnd: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired
}

export default Task;
