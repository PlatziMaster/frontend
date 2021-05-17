import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ children }) => {
  return (
    <header className='Header-container'>
      {children}
    </header>
  );
};

export default Header;
