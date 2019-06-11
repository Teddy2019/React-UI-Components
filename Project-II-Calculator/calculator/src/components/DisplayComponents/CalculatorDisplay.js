import React from 'react';
import './Display.css';

function DisplayComp(props) {
    return (
        <div className='DisplayComp'>
            {props.total}
        </div>
    )
}

export default DisplayComp;
