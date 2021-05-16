import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';

//import PropTypes from 'prop-types';

const Header = ({
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
      <Col xs='auto' className='d-flex justify-content-center align-self-center p-0'>
        <Image src={avatar} roundedCircle className='m-0' />
      </Col>
      <Col>
        <h1 className='Header-title d-block'>{name}</h1>
        <span className='Header-job-title d-block'>{phone}</span>
        <span className='Header-phone mr-4'>{profession}</span>
        <span className='Header-email mr-4'>{email}</span>
        <span className='Header-website mr-4'>{website}</span>
        <span className='Header-adress d-block'>{address}</span>
      </Col>

    </Row>
  );
};

Header.propTypes = {};

export default Header;
