import React from 'react';
import { Col, Row } from 'react-bootstrap';
//import PropTypes from 'prop-types';
// Estilos
import '../styles/components/Header.styl';

const Header = ({
  avatar,
  name,
  phone,
  profession,
  email,
  children,
  address,
}) => {
  console.log('adress', address);
  return (
    <>
      <Row className='pt-4'>
        <Col md={2}>
          <img alt={avatar} className='img-user' src={avatar} />
        </Col>
        <Col md={8} className='ml-3'>
          <Row>
            <Col>
              <h2 className='Header-title '>{name}</h2>
              <h4 className='Header-job-title'>{profession}</h4>
            </Col>
          </Row>
          <Row>
            <Col className='' xs={12} md={4}>
              <h5 className='Header-phone d-xs-block'>{phone}</h5>
            </Col>
            <Col className='' xs={12} md={4}>
              <h5 className='Header-email d-xs-block'>{email}</h5>

            </Col>
            <Col className='' xs={12} md={4}>
              <h5 className='Header-address d-xs-block'>{address}</h5>

            </Col>
          </Row>
          {children}
        </Col>
      </Row>
    </>
  );
};

Header.propTypes = {};

export default Header;
