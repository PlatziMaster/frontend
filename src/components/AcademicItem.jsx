import React from 'react';
import '../styles/components/AcademicItem.css';
import PropTypes from 'prop-types';

const AcademicItem = ({ degree, university, description }) => (
  <div className='academic-item'>
    <h3 className='degree'>{degree}</h3>
    <h5 className='university'>{[university]}</h5>
    <p>{description}</p>
  </div>
);

AcademicItem.propTypes = {
  degree: PropTypes.string,
  university: PropTypes.string,
  description: PropTypes.string,
};

export default AcademicItem;
