import React from 'react';
import '../styles/components/About.styl';

const About = ({
  address = 'address',
  email = 'email',
  website = 'website',
  phone = 'phone',
}) => {
  return (
    <div className='About'>
      <span className='About-title'>INFO</span>
      <div className='short-line'>_</div>
      <ul>
        <li className='About-item'>
          <span>DIRECTION</span>
          <p>{address}</p>
        </li>
        <li className='About-item'>
          <span>PHONE</span>
          <p>{phone}</p>
        </li>
        <li className='About-item'>
          <span>EMAIL</span>
          <p>{email}</p>
        </li>
        <li className='About-item'>
          <span>WEBSITE</span>
          <p>{website}</p>
        </li>
      </ul>
    </div>
  );
};

export default About;
