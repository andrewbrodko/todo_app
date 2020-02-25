import React from 'react';
import PropTypes from 'prop-types'
import './Task.css';

function Task({ head, date, pos_description, taskClick }) {
    const onClick = () => {
        window.scrollTo(0, pos_description);
        taskClick();
    };

    const dueStyling = due => {
        var now = new Date();

        if (due < now) {
            return "task overdueing";
        } else if (due < new Date(now.getTime() + 86400000 * 3)) {
            return "task upcoming";
        }

        return "task";
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
        <div className={dueStyling(date)} onClick={onClick}>
            <h2>{head}</h2>
            <p>{date.toLocaleDateString(undefined, options)}</p>
        </div>);
}

Task.propTypes = {
    head: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    pos_description: PropTypes.number.isRequired,
    taskClick: PropTypes.func.isRequired
}

export default Task;
