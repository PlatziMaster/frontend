import React from 'react';
import '../../styles/Header.css';

const Header = ({ children, img }) => {
  return (
    <header>
      <img src={img} alt='asd' />
      {children}
    </header>
  );
};

export default Header;
