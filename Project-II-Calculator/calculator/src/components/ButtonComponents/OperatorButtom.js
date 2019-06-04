import React from 'react';
import './Button.css'

function Operator(props){
    return (
        <div className={props.mathsOperatorStyle}> {props.mathsOperator} </div>
    )
}

export default Operator;