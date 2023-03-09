import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = ({ phone,email,website }) => {
  return (  
       <div className='About-title'>
          <div><span className='About-item'>{phone}</span></div>
          <div><span className='About-item'>{email}</span></div>
          <div><span className='About-item'>{website}</span></div>
        </div>
  );
};

export default About;
