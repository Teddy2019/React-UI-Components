import React from 'react';
import './Button.css';
import ActionB from './ActionButton';
import Number from './NumberButton'

const CalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function ButtonHolder1(){
    return (
        <div className='ButtonHolder1'>
          <ActionB Action={['clear']} />
          {CalNumbers.map(function(item){
          return <Number CalNumber={item} />})}
          <ActionB Action={0} />
        </div>
    )
}

export default ButtonHolder1;