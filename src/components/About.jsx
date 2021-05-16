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
      <ul>
        <li className='About-item'>
          <span>Adress</span>
          <p>{address}</p>
        </li>
        <li className='About-item'>
          <span>Phone</span>
          <p>{phone}</p>
        </li>
        <li className='About-item'>
          <span>Email</span>
          <p>{email}</p>
        </li>
        <li className='About-item'>
          <span>Website</span>
          <p>{website}</p>
        </li>
      </ul>
    </div>
  );
};

export default About;
