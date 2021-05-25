import React from 'react';
import '../styles/components/Header.styl';

/*Componente Header que contiene la información y componente about*/

const Header = ({ children, name }) => {
  return (
    <header className='Header card'>
      <h2 className='Header-name'>{name || 'Name'}</h2>
      { children }
    </header>
  );
};

export default Header;
