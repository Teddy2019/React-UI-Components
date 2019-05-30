import React from 'react';
import './App.css';
import Header from './components/HeaderComponents/HeaderContainer';
import Cardcontainer from './components/CardComponents/CardContainer'
const App = () => {
  return (
    <div className='App'> 
      <Header />
      <Cardcontainer />
    </div>
  );
};

export default App;
