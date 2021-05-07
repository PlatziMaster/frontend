import React from 'react';
import '../styles/components/About.styl';

const About = ({ title, jobTitle, email, phone, website, address, avatar } = []) => (
  <div className='About'>
    <picture>
      <img className='About__img' src={avatar} alt={title} />
    </picture>
    <div className='About__description'>
      <h2 className='About-title'>
        {title}
      </h2>
      <h3>
        {jobTitle}
      </h3>
      <div className='About__contact'>
        <p className='About-item'>
          {phone}
        </p>
        <p className='About-item'>
          {email}
        </p>
        <a className='About-item' href={website} rel='nofollow'>
          {website}
        </a>
      </div>
      <address>{address}</address>
    </div>
  </div>
);

export default About;
