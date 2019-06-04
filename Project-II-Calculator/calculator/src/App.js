import React from 'react';
import './App.css';
import DisplayComp from './components/DisplayComponents/CalculatorDisplay'
import ButtonHolder1 from './components/ButtonComponents/ButtonHolder1'
import ButtonHolder2 from './components/ButtonComponents/ButtonHolder2'
const App = () => {
  return (
    <div className='App'>
      <DisplayComp />
      <ButtonHolder1 />
      <ButtonHolder2 />
    </div>
  );
};

export default App;
