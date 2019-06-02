import React from 'react';
import './Button.css';

function Number(props){
   return (
   <div className={props.CalNumberStyl}>
      {props.CalNumber}
   </div>
   ) 
}
export default Number;
