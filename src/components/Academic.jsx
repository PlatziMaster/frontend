import React from 'react';
import '../styles/components/Academic.styl';

const AcademicStudy = ({
  degree,
  institution,
  startDate,
  endDate,
  description,
}) => {
  return (
    <div className='academic-box'>
      <p className='academic-title'>{degree}</p>
      <p className='academic-title'>{institution}</p>
      <p className='academic-date'>
        <span>{startDate}</span>
        <span>-</span>
        <span>{endDate}</span>
      </p>
      <p>{description}</p>
    </div>
  );
};

const Academic = ({ academic }) => {
  return (
    <div className='wrapper'>
      <h3>Academic</h3>
      {academic &&
        academic.map((ac, i) => (
          <AcademicStudy key={`${Math.random(i)}`} {...ac} />
        ))}
    </div>
  );
};

export default Academic;
