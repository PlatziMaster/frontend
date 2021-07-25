import React from 'react';
import '../styles/components/Header.styl';

const Header = () => (
  <div className="Header">
    <div>
      <img src="../../screenshot.png" width="120px" alt="User" />
    </div>
    <div>
      <h1>Título</h1>
      <div className="Header__contact-info">
        <h3>Phone</h3>
        <h3>Email</h3>
        <h3>Website</h3>
      </div>
      <h3>Address</h3>
    </div>
  </div>
);

export default Header;
