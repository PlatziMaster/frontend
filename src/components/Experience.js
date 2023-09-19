import React from 'react';
import '../styles/components/App.styl';

const Experience = ({ data }) => {
  const experience = Object.values(data);
  return (
    <div className='experiencia'>
      <h2 className='experiencia-header'>Experiencia</h2>
      {experience.map((exp) => {
        return (
          <div className='exp-container'>
            <div>
              Puesto:
              {' '}
              {exp.jobTitle}
            </div>
            <div>
              Empresa:
              {' '}
              {exp.company}
            </div>
            <div>
              Actividades:
              {' '}
              {exp.jobDescription}
            </div>
            <div>
              Desde:
              {' '}
              {exp.startDate}
            </div>
            <div>
              Hasta:
              {' '}
              {exp.endDate}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
