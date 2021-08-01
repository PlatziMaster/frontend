/* eslint-disable no-eval */
import React from 'react';
import '../styles/components/Header.styl';
import Gravatar from './Gravatar';
import Title from './Title';
import Subtitle from './Subtitle';

//Icons
import Phone from '../assets/icons/phone.svg';
import Email from '../assets/icons/mail.svg';
import Website from '../assets/icons/software-engineer.svg';
import Facebook from '../assets/icons/facebook.svg';
import Twitter from '../assets/icons/twitter.svg';
import Github from '../assets/icons/github.svg';
import LinkedIn from '../assets/icons/linkedin.svg';

//Plugin
import capitalize from '../plugins/index';

const icons = {
  facebook: Facebook,
  twitter: Twitter,
  github: Github,
  linkedin: LinkedIn,
};

const Header = ({ data, social }) => {
  return (
    <div className="Header">
      <div className="Header__title-avatar">
        <div className="Header__avatar-container">
          <Gravatar className="Header__avatar-img" avatar={data.avatar} alt="Avatar" />  
        </div>
        <div className="Header-title">
          <Title title="Header" />
        </div>
      </div>
      <div className="Header__info">
        <div className="Header__info-profile">
          <h2>{data.name}</h2>
          <h3>{data.profession}</h3>
          <p>{data.address}</p>
        </div>
        <div className="Header__infoContainer">
          <div className="Header__info-contact">
            <Subtitle title="Contact" />
            <div className="Header__info-contactElements">
              <div>
                <img src={Phone} alt="Phone icon" />
                <p>{data.phone}</p>
              </div>
              <div>
                <img src={Email} alt="Email icon" />
                <p>{data.email}</p>
              </div>
              <div>
                <img src={Website} alt="Website icon" />
                <a href={data.website}>Website</a>
              </div>
            </div>
          </div>
          <div className="Header__info-social">
            <Subtitle title="Social" />
            <div className="Header__info-socialLinks">
              {
                social && social.map(item => (
                  <div key={item.name}>
                    <img src={icons[item.name]} alt={`${capitalize(item.name)} icon`} />
                    <a href={item.url}>{capitalize(item.name)}</a>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
