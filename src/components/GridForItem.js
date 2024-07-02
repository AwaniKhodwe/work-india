import React from "react";

function GridForItem(props) {
    return (
        <div>
            <img src="https://placehold.co/400x400.png" style={{ height: '166px', width: '110px' }} alt="placeholder" />
            <p>{props.item}</p>
            <p>{props.price}</p>
        </div>
    );
}

export default GridForItem;