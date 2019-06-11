import React from 'react';
import './Button.css';

function Number(props){
   return (
   <div className={props.CalNumberStyl} onClick={()=>props.handeltakeNumValue(props.CalNumber)}>
      {props.CalNumber}
   </div>
   ) 
}
export default Number;
