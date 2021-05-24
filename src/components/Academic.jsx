import React from 'react';
import '../styles/components/Academic.styl';

const Academic = ({
  academic,
}) => {

  return (
    <div className='academic'>
      <h2 className='academic-title'>Educación</h2>
      {academic &&
        academic.map((item, index) => {
          const { id } = index;
          return (
            <div key={id} className='academic-item'>
              <h3 className='academic-degree'>{item.degree}</h3>
              <p className='academic-institution'><span>{item.institution}</span></p>
              <p className='academic-date'><span>{item.startDate}</span> - <span>{item.endDate}</span></p>
              <p className='academic-description'>{item.description}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Academic;
