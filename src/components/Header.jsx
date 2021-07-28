import React from 'react';
import '../styles/components/Header.styl';
import Gravatar from './Gravatar';
import Title from './Title';
import Subtitle from './Subtitle';

//Icons
import Phone from '../assets/icons/phone.svg';
import Email from '../assets/icons/mail.svg';
import Website from '../assets/icons/software-engineer.svg';
import Facebook from '../assets/icons/facebook-round.svg';
import Twitter from '../assets/icons/twitter-round.svg';
import Github from '../assets/icons/github.svg';
import LinkedIn from '../assets/icons/linkedin-round.svg';

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
          <Subtitle title="Contact" />
          <div className="Header__info-contactElements">
            <div>
              <img src={Phone} alt="Phone icon" />
              <p>9992098495</p>
            </div>
            <div>
              <img src={Email} alt="Email icon" />
              <p>jetradl@gmail.com</p>
            </div>
            <div>
              <img src={Website} alt="Website icon" />
              <a href="https://platzi.com/p/jorgetrad/">Website</a>
            </div>
          </div>
        </div>
        <div className="Header__info-social">
          <Subtitle title="Social" />
          <div className="Header__info-socialLinks">
            <div>
              <img src={Facebook} alt="" />
              <a href="https://www.facebook.com/jorgeelias.tradlopez">Jorge Trad</a>
            </div>
            <div>
              <img src={Twitter} alt="" />
              <a href="https://twitter.-roundjorge_trad">jorge_trad</a>
            </div>
            <div>
              <img src={Github} alt="" />
              <a href="https://github.com/jorgetrad99">jorgetrad99</a>
            </div>
            <div>
              <img src={LinkedIn} alt="" />
              <a href="https://www.linkedin.com/in/jorgetrad/">jorgetrad</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
