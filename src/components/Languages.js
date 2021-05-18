import React from 'react';
import { ProgressBar } from 'react-bootstrap';

//import PropTypes from 'prop-types';
// Estilos
import '../styles/components/Languages.styl';

const Languages = ({ languages }) => {
  return (
    <div>

      <h4 className='Languages-title'>Idiomas</h4>

      {
      languages?.map((item) => {
        return (
          <div
            key={item.name}
            className='Languages-item'
          >
            <ProgressBar animated variant='info' now={parseInt(item.percentage, 10)} label={item.name} />

          </div>
        );
      })

      }
      <span className="Languages-item"></span>
      <span className="Languages-item"></span>
      <span className="Languages-item"></span>
    </div>
  );
};

Languages.propTypes = {

};

export default Languages;
