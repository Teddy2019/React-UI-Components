import React from 'react';
import './App.css';
import Header from './components/HeaderComponents/HeaderContainer';
import Cardcontainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer'
const App = () => {
  return (
    <div className='App'> 
      <Header />
      <Cardcontainer />
      <Footer />
    </div>
  );
};

export default App;
