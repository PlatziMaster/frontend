import React from 'react';

const About = ({ phone, email, website, address }) => {
  return (
    <>
      <div className='About-title'>A cerca de mi:</div>
      <div className='About-item'>{phone}</div>
      <div className='About-item'>{email}</div>
      <div className='About-item'>{website}</div>
      <div className='About-item'>{address}</div>
    </>
  );
};

export default About;
