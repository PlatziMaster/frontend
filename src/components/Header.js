import React from 'react';
import { Row, Col } from 'react-bootstrap';

//import PropTypes from 'prop-types';

const Header = ({ children, social }) => {
  return (
    <Row>
      <span className='Header-title' />
      <Col className='d-flex m-0 py-0 pr-0' xs={12} md="8">{children}</Col>
      <Col xs='auto' className='m-0 p-0 py-2'>
        {social?.map(({ name, icon, url }) => {
          return (
            <a
              key={name}
              href={url}
              className='float-left ml-3 '
              target='_blank'
              rel='noreferrer'
            >
              <img height='30' src={icon} alt={name} />
            </a>
          );
        })}
      </Col>
    </Row>
  );
};

Header.propTypes = {};

export default Header;
