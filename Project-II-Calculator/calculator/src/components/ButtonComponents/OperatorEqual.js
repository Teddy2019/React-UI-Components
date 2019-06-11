import React from 'react';
import './Button.css'

function OperatorEqual(props){
    return (
        <div className={props.mathsOperatorStyle} onClick={()=>{props.handelequalOperator()}} >
             {'='} 
        </div>
    )
}

export default OperatorEqual;