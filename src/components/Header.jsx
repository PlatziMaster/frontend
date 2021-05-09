import React from 'react';
import '../styles/components/Header.styl';

function Header({ children }) {
  return (
    <div className='Header'>
      <div className='Header-title'>
        <img src='' alt='Header-profile' />
      </div>
      { children }
    </div>
  );
}

export default Header;
