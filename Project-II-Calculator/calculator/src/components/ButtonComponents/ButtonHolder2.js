import React from 'react';
import './Button.css';
import Operator from './OperatorButtom'

const mathsOperators = ['%' , 'x' , '-', '+', '=']

function ButtonHolder2(){
    return (
        <div className='ButtonHolder2'>
          {mathsOperators.map(function(item){
              return <Operator mathsOperator={item} />;})}
        </div>
    )
}

export default ButtonHolder2;