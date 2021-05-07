import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/About.styl';

const About = ({ name, profession, email, phone, website, address, avatar } = []) => (
  <div className='About'>
    <picture>
      <img className='About__img' src={avatar} alt={name} />
    </picture>
    <div className='About__description'>
      <h2 className='About-title'>
        Name:
        {name}
      </h2>
      <h3>
        Job:
        {profession}
      </h3>
      <div className='About__contact'>
        <h4 className='About-item'>
          Phone:
          {phone}
        </h4>
        <h4 className='About-item'>
          Mail:
          {email}
        </h4>
        <a className='About-item' href={website} rel='nofollow'>
          Website:
          {website}
        </a>
      </div>
      <address>{address}</address>
    </div>
  </div>
);

About.defaultProps = {
  name: 'jhon doe',
  profession: 'frontend',
  email: 'example@mail.com',
  phone: '(1)2345678',
  website: 'example.com',
  address: 'address example',
  avatar: 'image',
};

About.propTypes = {
  name: PropTypes.string,
  profession: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string,
  address: PropTypes.string,
  avatar: PropTypes.string,
};

export default About;
