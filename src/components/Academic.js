import React from 'react';
import '../styles/components/App.styl';

const Estudios = ({ data }) => {
  const academic = Object.values(data);
  return (
    <div>
      <h2 className='estudios-header'>Estudios</h2>
      {academic.map(estudio => (
        <div>
          <h3>{estudio.degree}</h3>
          <div>{estudio.description}</div>
          <div>{estudio.institution}</div>
          <div>{estudio.startDate}</div>
          <div>{estudio.endDate}</div>
        </div>
      ))}
    </div>
  );
};

export default Estudios;
