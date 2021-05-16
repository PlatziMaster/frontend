import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
//import PropTypes from 'prop-types';

const About = ({
  avatar,
  name,
  phone,
  profession,
  email,
  website,
  address,
}) => {
  return (
    <Row>
      <Col
        xs='auto'
        className='d-flex justify-content-center align-self-center py-0 pr-0'
      >
        <Image src={avatar} roundedCircle className='' />
      </Col>
      <Col>
        <h1 className='About-title d-block'>{name}</h1>
        <h4 className=' About-item About-job-title d-block'>{profession}</h4>
        <span className='About-item About-phone mr-4'>{phone}</span>
        <span className='About-item About-email mr-4'>{email}</span>
        <span className='About-item About-website mr-4'>{website}</span>
        <span className='About-item About-adress d-block'>{address}</span>
      </Col>
    </Row>
  );
};

About.propTypes = {};

export default About;
