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
        <Image src={avatar} roundedCircle className='' width='120' />
      </Col>
      <Col>
        <Row>
          <Col xs={12}>
            <h1 className='About-title d-block'>{name}</h1>
          </Col>
          <Col xs={12}>
            <h4 className=' About-item About-job-title d-block'>
              {profession}
            </h4>
          </Col>
          <Col xs='auto'>
            <span className='About-item About-phone mr-4'>{phone}</span>
          </Col>
          <Col xs='auto'>
            <span className='About-item About-email mr-4'>{email}</span>
          </Col>
          <Col xs='auto'>
            <a
              href={website}
              target='_blank'
              className='About-item About-website d-xs-block mr-4'
              rel='noreferrer'
            >
              {website}
            </a>
          </Col>
          <Col xs={12}>
            <span className='About-item About-adress'>{address}</span>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

About.propTypes = {};

export default About;
