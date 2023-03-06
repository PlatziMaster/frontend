import React from 'react';

const Academic = ({ academic = [] }) => {
  return (
    <div className='section two-cols'>
      <div className='title-section'>
        <h2 className='Academic-title'>Educación</h2>
      </div>
      <div className='desc-section'>
        {academic.map((item) => {
          return (
            <div key={item.degree}>
              <h3 className='Academic-item'>{item.degree}</h3>
              <p className='company'>{item.institution}</p>
              <p className='dates'>
                {item.startDate} - {item.endDate}
              </p>
              <p className='description'>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Academic;
