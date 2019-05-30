import React from 'react';
import './Card.css';
import Banner from './CardBanner'
import CardContent from './CardContent'

function Cardcontainer(){
    return (
        <div className='Cardconatiner'>
          <Banner />
          <CardContent />
        </div>
    )
};

export default Cardcontainer;
