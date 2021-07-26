import React from 'react';
import '../styles/components/Header.styl';
import Gravatar from "./Gravatar";
import Title from './Title';

const Header = () => (
  <div className="Header">
    <div className="Header__title-avatar">
      <Gravatar className="Header__avatar" email="jetradl@gmail.com" alt="Avatar" />  
      <div className="Header-title">
        <Title title="Header" />
      </div>
    </div>
    <h2>Header Job Title</h2>
    <div className="Header__contact-info">
      <p>Phone</p>
      <p>Email</p>
      <p>Website</p>
    </div>
    <p>Address</p>
  </div>
);

export default Header;
