import React from 'react';

const Header = props => {
  const { name, profession, socialMedia = [] } = props;
  return (
    <div className="Header">
      <div className="Header__avatar">
        <img src={props.avatar} alt="avatar" />
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

export default Header;
