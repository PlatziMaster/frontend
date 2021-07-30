import React from 'react';
import '../styles/components/Academic.styl';

const Academic = ({ academic = [], certificate = [] }) => {

  return (
    <div className='Academic-title'>
      <h4>-My Education</h4>
      {
        academic?.map((a) => {
          return (
            <div key={a.id} className='Academic-item'>
              <img src='https://raw.githubusercontent.com/themattfire/img-projects/46b2fb979218efee0f9276ac9018c2d109758b92/graduation-cap-solid.svg' alt='Email icon' />
              <h3>{a.degree}</h3>
              <p>{a.institution}</p>
              <p>{a.date}</p>
            </div>
          );
        })
      }

      {
        certificate?.map((e) => {
          return (
            <div key={e.id} className='Academic-item'>
              <img src='https://raw.githubusercontent.com/themattfire/img-projects/46b2fb979218efee0f9276ac9018c2d109758b92/graduation-cap-solid.svg' alt='Email icon' />
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
