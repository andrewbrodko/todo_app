import React from 'react';
import './Scrollers.css';

function Scrollers({ refL }) {
    return (
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
    );
}

export default Scrollers
