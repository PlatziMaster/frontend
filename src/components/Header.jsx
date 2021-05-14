import React from 'react';
import '../styles/components/Header.css';

const Header = ({ avatar, name, children }) => (
  <header className="Header-container">
    <h1 className="Header-title">{name}</h1>
    <div>
      <img src={avatar} alt="profile-icon" />
      {children}
    </div>
  </header>
);

export default Header;
