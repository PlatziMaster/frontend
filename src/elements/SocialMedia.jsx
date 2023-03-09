import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { IoShareSocial } from 'react-icons/io5';

import { SiPlatzi } from 'react-icons/si';

const SocialMedia = ({ social }) => {
  const generateIcon = (name) => {
    switch (name) {
      case 'instagram':
        return <FaInstagram color='#588B8B' />;
      case 'github':
        return <FaGithub color='#588B8B' />;
      case 'linkedin':
        return <FaLinkedinIn color='#588B8B' />;
      case 'platzi':
        return <SiPlatzi color='#588B8B' />;
      default:
        break;
    }
  };

  return (
    <div className='box social'>
      <div className='flex align-items-center gap-2'>
        <IoShareSocial color='#588B8B' />
        <div className='title'>Redes</div>
      </div>
      <div style={{ marginTop: '8px' }}>
        {social &&
          social.length > 0 &&
          social.map((element, index) => {
            return (
              <a href={element.url} target='_blank' rel='noreferrer'>
                <div
                  className='flex align-items-center gap-2'
                  key={element.key}
                >
                  {generateIcon(element.key)}
                  <div className='name'>{element.name}</div>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default SocialMedia;
