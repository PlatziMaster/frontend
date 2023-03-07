import React from 'react';



function Header({ children, data }) {
  return (
    <header className='header nes-container is-dark with-title'>
      <img
        src={data.avatar}
        width='156'
        alt='Avatar'
        className='Header-avatar'
      />

      {children}
    </header>
  );
}

export default Header;