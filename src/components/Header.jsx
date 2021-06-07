import React from 'react';
import '../styles/components/Header.styl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faTwitter,
  faInstagramSquare,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core';
import profile from '../images/Perfil.png';

const arrayIcons = [faTwitter, faInstagramSquare, faGithub, faLinkedin];
function Header({ name, email, address, website, social }) {
  return (
    <header className="header">
      <div className="grid">
        <div className="profile__image">
          <img className="image" src={profile} alt="foto de perfil" />
          <div className="media grid">
            {social.map((item, index) => (
              <div className="media-item" key={item.id}>
                <a href={item.url} name={item.name}>
                  <FontAwesomeIcon icon={arrayIcons[index]} />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="texts">
          <h1 className="weight-700">
            {name}
            <br />
            <span className="weight-400">{email}</span>
          </h1>
          <p className="parraph">{address}</p>
          <a href={website} className="parraph">
            Pagina
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
