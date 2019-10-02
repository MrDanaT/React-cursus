import React from 'react';

export const char = (props) => {
    const styling = {
        display: 'inline-block',
        padding: '16px ',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    }


    return (
        <div style={styling} onClick={props.clicked}>
            {props.character}
        </div>
    );
}