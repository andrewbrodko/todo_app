import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Adder.css';

function Adder({ current, refs, addData, addTask }) {
    const dateMax = '2030-01-01';
    const dateMin = new Date().toISOString().split('T')[0];

    useEffect(() => {
        refs.refH.current.value = current.head;
        refs.refT.current.value = current.text;
        refs.refDD.current.value = current.date;
        refs.refHH.current.value = current.time;
    });

    const submitHead = e => {
        addData({ head: e.target.value });
    };
    const submitText = e => {
        addData({ text: e.target.value });
    };
    const submitDate = e => {
        if (new Date(e.target.value) < new Date(dateMax).getTime() &&
            new Date(e.target.value) > new Date(dateMin).getTime()) {
                addData({ date: e.target.value });
        }
    };
    const submitTime = e => {
        addData({ time: e.target.value });
    };
    const submitTask = () => {
        if (current.header !== '' && current.text !== '') addTask(current);
    }
    return (
        <div className="adder">
            <span>
            Task Text:
            <div className="text">
                <input
                    type="text"
                    id="headInsert"
                    placeholder="caption"
                    ref={refs.refH}
                    onChange={submitHead}
                    required={true}
                    autoFocus={true}
                    autoComplete="off"></input>
                <input
                    type="text"
                    id="textInsert"
                    placeholder="content"
                    ref={refs.refT}
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
                    ref={refs.refDD}
                    onChange={submitDate}
                    required={true}></input>
                <input
                    type="time"
                    ref={refs.refHH}
                    onChange={submitTime}
                    required={true}></input>
            </div>
            </span>
            <span>
                <div className="add" onClick={submitTask}>Add task</div>
            </span>
        </div>
    );
}

Adder.propTypes = {
    current:PropTypes.shape({
        head: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired
    }).isRequired,
    addData: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired
}

export default Adder
