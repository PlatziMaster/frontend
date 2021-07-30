import React from 'react';
import '../styles/components/About.styl';

const About = ({ profession, address, email, website, phone }) => {

  return (
    <div className='About-container'>
      <h2 className='Header-job-title'>{profession}</h2>
      <div className='About-title'>
        <img src='https://raw.githubusercontent.com/themattfire/img-projects/c83cccce9a1c2c81f7e582e55fd315f04c2efaac/phone-solid.svg' alt='Phone icon' />
        <p className='About-item'>
          {phone}
        </p>
        <img src='https://raw.githubusercontent.com/themattfire/img-projects/c83cccce9a1c2c81f7e582e55fd315f04c2efaac/envelope-solid.svg' alt='Email icon' />
        <p className='About-item'>{email}</p>
        <img src='https://raw.githubusercontent.com/themattfire/img-projects/c83cccce9a1c2c81f7e582e55fd315f04c2efaac/github-brands.svg' alt='Github icon' />
        <a className='About-item' href={website} target='_blank' rel='noreferrer'>Github</a>
        <img src='https://raw.githubusercontent.com/themattfire/img-projects/c83cccce9a1c2c81f7e582e55fd315f04c2efaac/map-marker-alt-solid.svg' alt='Address icon' />
        <a className='About-item' href={address} target='_blank' rel='noreferrer'>Address</a>
      </div>
    </div>
  );
};

export default About;
