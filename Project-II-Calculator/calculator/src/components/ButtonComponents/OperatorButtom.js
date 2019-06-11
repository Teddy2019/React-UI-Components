import React from 'react';
import './Button.css'

function Operator(props){
    return (
        <div className={props.mathsOperatorStyle} onClick={()=>props.handeltakeNumValue(props.mathsOperator)}>
             {props.mathsOperator} 
        </div>
    )
}

export default Operator;