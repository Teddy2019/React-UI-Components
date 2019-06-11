import React from 'react';
import './Button.css';
import ActionB from './ActionButton';
import Number from './NumberButton';
import ActionA from './ActionButton0';

const CalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function ButtonHolder1(props){
    return (
        <div className='ButtonHolder1'>
          <ActionB Action={['clear']} handelclearDisplay={props.handelclearDisplay} />
          {CalNumbers.map(function(item){
          return <Number CalNumber={item} CalNumberStyl={'Number'} handeltakeNumValue={props.handeltakeNumValue} />})}
          <ActionA Action={0} handeltakeNumValue={props.handeltakeNumValue} />
        </div>
    )
}

export default ButtonHolder1;