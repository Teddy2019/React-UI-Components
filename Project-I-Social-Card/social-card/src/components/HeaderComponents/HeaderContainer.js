import React from 'react';
import './Header.css';
import Img from './ImageThumbnail';
import HeaderContaint from './HeaderContent'

function Header(){
    return (
    <header className='Header'>
      <Img />
      <HeaderContaint />
    </header>)
}

export default Header;