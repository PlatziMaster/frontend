import React from 'react';
import PropTypes from 'prop-types';
const Header = props => {
  /**
   * Recibe por props:
   * * Nombre
   * * Profesion
   * * Redes sociales
   */
  const { name, profession, socialMedia = [], avatar } = props;
  return (
    <div className="Header">
      <div className="Header__avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="Header__principal">
        <h1 className="Header-title">{name}</h1>
        <p className="Header-job-title">{profession}</p>
        <ul className="Header-social-media">
          {socialMedia.map((social, idx) => (
            <li key={idx}>
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <i className={`fab fa-${social.name}`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {props.children}
    </div>
  );
};

Header.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  socialMedia: PropTypes.array.isRequired,
};

export default Header;
