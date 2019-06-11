import React from 'react';
import './Button.css';
import Operator from './OperatorButtom';
import OperatorEqual from './OperatorEqual'

const mathsOperators = ['÷' , 'x' , '-', '+']

function ButtonHolder2(props){
    return (
        <div className='ButtonHolder2'>
          {mathsOperators.map(function(item){
              return <Operator mathsOperator={item} mathsOperatorStyle={'Operator'} handeltakeNumValue ={props.handeltakeNumValue} />;})}
          <OperatorEqual mathsOperatorStyle={'Operator'} handelequalOperator={props.handelequalOperator} />
        </div>
    )
}

export default ButtonHolder2;