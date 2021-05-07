import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ children } = null) => (
  <>
    <h2 className='Header-title'> </h2>
    <section className='Header'>{children}</section>
  </>
);

export default Header;
