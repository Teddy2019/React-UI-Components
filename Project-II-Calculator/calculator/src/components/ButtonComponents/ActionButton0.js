import React from 'react';
import './Button.css';

function ActionA(props){
    return (<div className='ActionB' onClick={()=> props.handeltakeNumValue(props.Action)}>
        {props.Action}
    </div>)
}

export default ActionA;
