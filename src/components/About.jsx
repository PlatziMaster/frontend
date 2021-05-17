import React from 'react';
import '../styles/components/About.css';

const About = ({ phone, email, website, address }) => {
  return (
    <div className='about'>
      <div className='About-title'>Información personal:</div>
      <div className='About-item'>Teléfono: {phone}</div>
      <div className='About-item'>E-mail: {email}</div>
      <div className='About-item'>Sitio web: {website}</div>
      <div className='About-item'>Dirección: {address}</div>
    </div>
  );
};

export default About;
