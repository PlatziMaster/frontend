import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ children, name }) => {
  return (
    <header className='Header card primary'>
      <h2 className='Header-title'>{name || 'Name'}</h2>
      { children }
    </header>
  );
};

export default Header;
