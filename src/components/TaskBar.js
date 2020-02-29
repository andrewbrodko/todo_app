import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './TaskBar.css';
import VAdder from '../containers/VAdder';
import Scrollers from './Scrollers';
import VTask from '../containers/VTask';

function TaskBar({ repository }) {
    const refL = useRef();
    const refH = useRef();
    const refT = useRef();
    const refDD = useRef();
    const refHH = useRef();

    return (
        <div className="taskBar">
            <div className="list" ref={refL}>
                <Scrollers refL={refL} />
                <div className="contents">
                    {repository.map(task => (
                        <VTask key={task.id} state={task} refL={refL} />
                    ))}
                </div>
            </div>
            <VAdder refs={{ refH, refT, refDD, refHH }} />
        </div>
    );
}

TaskBar.propTypes = {
    repository: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            head: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            date: PropTypes.instanceOf(Date).isRequired,
            style: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        }).isRequired
    ).isRequired
}

export default TaskBar;
