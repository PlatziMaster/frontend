import React from 'react';
import '../styles/components/About.styl';

const About = ({
  name,
  profession,
  address,
  email,
  website,
  phone,
  avatar,
}) => {
  return (
    <div className='about-wrapper'>
      <div className='avatar'>
        <img src={avatar} alt='a pic of me' />
      </div>
      <div className='content'>
        <div>
          <h2 className='name'>{name}</h2>
          <h3 className='profession'>{profession}</h3>
        </div>
        <div className='contact-info'>
          <p>{phone}</p>
          <p>{email}</p>
          <p>{website}</p>
          <p>{address}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
