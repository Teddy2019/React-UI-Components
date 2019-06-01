import React from 'react';
import './Button.css';
import ActionB from './ActionButton';
import Number from './NumberButton'

function ButtonHolder1(){
    return (
        <div className='ButtonHolder1'>
          <ActionB />
          <Number />
          <Number />
          <Number />
          <Number />
          <Number />
          <Number />
          <Number />
          <Number />
          <Number />
          <ActionB />
        </div>
    )
}

export default ButtonHolder1;