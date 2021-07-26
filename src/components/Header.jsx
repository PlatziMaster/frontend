import React from 'react';
import '../styles/components/Header.styl';
import Gravatar from './Gravatar';
import Title from './Title';

const Header = () => (
  <div className="Header">
    <div className="Header__title-avatar">
      <div className="Header__avatar-container">
        <Gravatar className="Header__avatar-img" email="jetradl@gmail.com" alt="Avatar" />  
      </div>
      <div className="Header-title">
        <Title title="Header" />
      </div>
    </div>
    <div className="Header__info">
      <h2>Jorge Elias Trad López</h2>
      <h3>Frontend Development Student </h3>
      <div className="Header__info-contact">
        <p>9992098495</p>
        <p>jetradl@gmail.com</p>
        <p>platzi.com/p/jorgetrad/</p>
      </div>
      <p>Mérida, Yucatán, México</p>
    </div>
  </div>
);

export default Header;
