import React from 'react';
import '../styles/components/Header.styl';
import Gravatar from "./Gravatar";

const Header = () => (
  <div className="Header">
    <div>
      <Gravatar email="jetradl@gmail.com" alt="Avatar" />
    </div>
    <div>
      <div className="Header-title">
        <h1>Header Title</h1>
      </div>
      <h2>Header Job Title</h2>
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
