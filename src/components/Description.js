import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Description.css';

function Description({ task, submitRef, submitTask }) {
    const dateMax = '2030-01-01';
    const dateMin = new Date().toISOString().split('T')[0];

    const ref = useRef();
    const refH = useRef();
    const refT = useRef();
    const refDD = useRef();
    const refHH = useRef();
    useEffect(() => {
        var date = new Date(task.date.getTime() - task.date.getTimezoneOffset() * 60000);
        if (task.id) {
            submitRef(ref);
        }
        var time = date.toISOString().split('T')[1];

        refH.current.value = task.head;
        refT.current.value = task.text;
        refDD.current.value = date.toISOString().split('T')[0];
        refHH.current.value = [ time.split(':')[0], time.split(':')[1] ].join(':');
    });

    const submitHead = e => {
        submitTask({ id: task.id, head: e.target.value });
    };
    const submitText = e => {
        submitTask({ id: task.id, text: e.target.value });
    };
    const submitDate = e => {
        if (refDD.current.valueAsDate !== null &&
            refDD.current.valueAsDate.getTime() < new Date(dateMax).getTime() &&
            refDD.current.valueAsDate.getTime() > new Date(dateMin).getTime()) {
            var date = refDD.current.valueAsDate.getTime();
            var time = refHH.current.valueAsDate.getTime() + refHH.current.valueAsDate.getTimezoneOffset() * 60000;
            submitTask({ id: task.id, date: new Date(date + time) });
        }
    };

    return (
        <div className="description" ref={ref}>
            <input type="text" ref={refH} onChange={submitHead} disabled={task.id === undefined || task.completed}></input>
            <textarea ref={refT} onChange={submitText} disabled={task.id === undefined || task.completed}></textarea>
            <input
                type="date"
                ref={refDD}
                onChange={submitDate}
                required={true}
                max={dateMax}
                hidden={task.id === undefined}
                disabled={task.id === undefined || task.completed}></input>
            <input
                type="time"
                ref={refHH}
                onChange={submitDate}
                required={true}
                hidden={task.id === undefined}
                disabled={task.id === undefined || task.completed}></input>
            <div onClick={ () => window.scroll(0, 0) } hidden={true}>back</div>
        </div>
    );
}

Description.propTypes = {
    task: PropTypes.shape({
        head: PropTypes.string,
        text: PropTypes.string,
    }).isRequired,
    submitRef: PropTypes.func.isRequired,
    submitTask: PropTypes.func.isRequired
}

export default Description
