import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types'
import './Description.css';

function Description({ task, submitRef, submitTask }) {
    const ref = useRef();
    const refH = useRef();
    const refT = useRef();
    useEffect(() => {
        submitRef(ref);
        refH.current.value = task.head;
        refT.current.value = task.text;
    });

    const submitHead = e => {
        submitTask({ id: task.id, head: e.target.value });
    };
    const submitText = e => {
        submitTask({ id: task.id, text: e.target.value });
    };

    return (
        <div className="description" ref={ref}>
            <input type="text" ref={refH} onChange={submitHead} ></input>
            <textarea ref={refT} onChange={submitText} ></textarea>
            <div onClick={ () => window.scroll(0, 0) } hidden={true} >back</div>
        </div>);
}

Description.propTypes = {
    task: PropTypes.shape({
        head: PropTypes.string,
        text: PropTypes.string,
    }).isRequired,
    submitRef: PropTypes.func.isRequired,
    submitTask: PropTypes.func.isRequired
}

export default Description;
