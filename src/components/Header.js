import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

//import PropTypes from 'prop-types';

const Header = ({
  children,
  avatar,
  name,
  phone,
  profession,
  email,
  website,
  address,
}) => {
  return (
    <Row >
      <span className='Header-title'></span>
      <Col className='d-flex m-0 py-0 pr-0'>
        {children}
      </Col>
      <Col xs='auto' className='m-0 p-0'>
        <a href='/' className='float-left'>
          <Image src={avatar} roundedCircle />
        </a>
      </Col>
    </Row>
  );
};

Header.propTypes = {};

export default Header;
