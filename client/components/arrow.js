import React from 'react';

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + " " + "carouselArrow"}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}
export default Arrow;
