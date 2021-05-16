import React from 'react';
import { Badge, Col, Row } from 'react-bootstrap';
//import PropTypes from 'prop-types';

const Interest = ({ interest }) => {
  return (
    <div>
      <h4 className='Interest-title '> interest</h4>
      <Row className='justify-content-around px-3'>
        {interest?.map((item) => {
          return (
            <Col xs='6' md='3' className='px-1' key={item}>
              <Badge variant='dark' className='Interest-item p-1 w-100'>
                {item}
              </Badge>
            </Col>

          );
        })}
      </Row>
      <span className='Interest-item' />
      <span className='Interest-item' />
      <span className='Interest-item' />
    </div>
  );
};

Interest.propTypes = {};

export default Interest;
