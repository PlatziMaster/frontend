import React from 'react';
import '../styles/components/Footer.styl';
import { FiFacebook, FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = (data) => {
  const { social } = data;
  return (
    <footer className='Footer-container'>
      { social &&
          social.map(item => (
            <a href={item.url} className='Social-item' target='_blank' rel='noreferrer' key={social.indexOf(item)}>
              {item.icon === 'Facebook' ? <FiFacebook /> : item.icon === 'Twitter' ? <FiTwitter /> : item.icon === 'Github' ? <FiGithub /> : <FiLinkedin /> }
            </a>
          ))
      }
    </footer>
  );
};

export default Footer;
