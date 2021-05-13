import React from 'react';
import '../styles/components/About.css';

const About = ({ title, jobTitle, phone, email, website, adress }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className='flex'>
        <p>{jobTitle}</p>
        <p>{phone}</p>
        <p>{email}</p>
        <p>{website}</p>
        <p>{adress}</p>
      </div>
    </div>
  );
};

export default About;
