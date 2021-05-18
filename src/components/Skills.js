import React from 'react';
import { ProgressBar } from 'react-bootstrap';
//import PropTypes from 'prop-types';
// Estilos
import '../styles/components/Skills.styl';

const Skills = ({ skills }) => {
  return (
    <div>
      <h4 className='Skills-title'>Habilidades</h4>

      {
        skills?.map((item) => {
          return (
            <div
              key={item.name}
              className='Skills-item'
            >
              <ProgressBar animated variant='info' now={parseInt(item.percentage, 10)} label={item.name} />


            </div>
          );
        })

      }
      <span className="Skills-item"></span>
      <span className="Skills-item"></span>
      <span className="Skills-item"></span>
    </div>
  );
};

Skills.propTypes = {

};

export default Skills;
