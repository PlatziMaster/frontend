import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ children }) => (
  <header className="card header Header-title">
    { children }
  </header>
);

export default Header;
