import React from 'react';
import '../styles/components/Header.styl';
import Gravatar from './Gravatar';
import Title from './Title';
import Subtitle from './Subtitle';

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
      <h2>Jorge Trad</h2>
      <h3>Frontend Development Student </h3>
      <p>Mérida, Yucatán, México</p>
      <div className="Header__infoContainer">
        <div className="Header__info-contact">
          <Subtitle title="Contacts"></Subtitle>
          <div className="Header__info-contactElements">
            <p>9992098495</p>
            <p>jetradl@gmail.com</p>
            <a href="https://platzi.com/p/jorgetrad/">Website</a>
          </div>
        </div>
        <div className="Header__info-social">
          <Subtitle title="Social"></Subtitle>
          <div className="Header__info-socialLinks">
            <a href="https://www.facebook.com/jorgeelias.tradlopez">Facebook</a>
            <a href="https://twitter.com/jorge_trad">Twitter</a>
            <a href="https://github.com/jorgetrad99">Github</a>
            <a href="https://www.linkedin.com/in/jorgetrad/">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
