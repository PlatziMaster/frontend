import React from 'react';

const SocialIcon = ({ name, url }) => {
  return (
    <a className="link" href={url} target="_blank" rel="noreferrer">
      {name}
    </a>
  );
};

const Footer = ({ social }) => {
  return (
    <div className="footer-wrapper">
      <p>More about me >>></p>
      <div>
        {social &&
          social.map((social, i) => (
            <SocialIcon key={`${Math.random(i)}`} {...social} />
          ))}
      </div>
    </div>
  );
};

export default Footer;
