import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ avatar, name, children }) => (
  <header>
    <h1 className="Header-title">{name}</h1>
    <img src={avatar} alt="profile-icon" />
    {children}
  </header>
);

export default Header;
