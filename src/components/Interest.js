import React from 'react';
import { Button, Row } from 'react-bootstrap';
//import PropTypes from 'prop-types';
// Estilos
import '../styles/components/Interest.styl';

const Interest = ({ interest }) => {
  return (
    <div>

      <h4 className='Interest-title'>Intereses</h4>
      <Row>
        {
          interest?.map((item) => {
            return (
              <div
                key={item}
                className='Interest-item pt-2'
              >
                <Button variant='info'>{item}</Button>
                
              </div>
            );
          })

        }
      </Row>
      <span className="Interest-item"></span>
      <span className="Interest-item"></span>
      <span className="Interest-item"></span>
    </div>
  );
};

Interest.propTypes = {

};

export default Interest;
