import React from 'react';

const Academic = ({ academic = [], certificate = [] }) => {

  return (
    <div className='education__container'>
      <h4>-My Education</h4>
      {
        academic.map((a) => {
          return (
            <div key={a.id} className='academic__container'>
              <h3>{a.degree}</h3>
              <p>{a.institution}</p>
              <p>{a.date}</p>
            </div>
          );
        })
      }

      {
        certificate.map((e) => {
          return (
            <div key={e.id} className='certificate__container'>
              <h3>{e.name}</h3>
              <p>{e.institution}</p>
              <p>{e.date}</p>
              <p>{e.description}</p>
            </div>
          );
        })
      }
    </div>
  );
};

export default Academic;
