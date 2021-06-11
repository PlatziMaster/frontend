import React from 'react';
import '../styles/components/About.styl';
import { FiMapPin, FiMail, FiGlobe, FiPhone } from 'react-icons/fi';

const About = (data) => {
  const { name, profession, address, email, website, phone } = data;
  return (
    <section className='About-container'>
      <h1 className='About-title'>{name}</h1>
      <h2 className='About-job-title'>{profession}</h2>
      <div className='About-contact-container'>
        <p className='About-contact-address'>
          <FiMapPin />
          {address}
        </p>
        <p className='About-item'>
          <FiMail />
          {email}
        </p>
        <p className='About-item'>
          <FiGlobe />
          {website}
        </p>
        <p className='About-item'>
          <FiPhone />
          {phone}
        </p>
      </div>
    </section>
  );
};

export default About;
