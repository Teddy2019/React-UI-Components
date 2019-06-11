import React from 'react';
import './Button.css';

function ActionB(props){
    return (<div className='ActionB' onClick={()=>props.handelclearDisplay()}>
        {props.Action}
    </div>)
}

export default ActionB;
