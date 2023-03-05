/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

function Header({ children, data }) {
  return (
    <header className='Header'>
      <img
        src={data.avatar}
        width='156'
        alt='Avatar'
        className='Header-avatar'
      />

      <h1 className='Header-title sr-only'>{data.name} CV</h1>

      {children}
    </header>
  );
}

export default Header;
