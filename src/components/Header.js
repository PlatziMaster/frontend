/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';

const Header = ({ children }) => {
  return (
    <header className='Header-title'>
      {children}
    </header>
  );
};

export default Header;
