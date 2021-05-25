import React from 'react';
import '../styles/components/Experience.styl';

/*Componente que muestra por parametro la experiencia*/

const Experience = ({ experience }) => {
  return (
    <section className='Experience card'>
      <h2 className='Experience-title'>Experience</h2>
      <ul className='Experience-list grid'>
        {experience?.map(item => (
          <li key={item?.jobTitle} className='Experience-item grid'>
            <div className='flex'>
              <p><strong>{item?.company || 'Company'}</strong></p>
              <p>{item?.jobTitle || 'Job'}</p>
            </div>
            <p>{item?.jobDescription || 'Description'}</p>
            <div className='flex'>
              <p>{item?.startDate || 'Start date'}</p>
              <span>></span>
              <p>{item?.endDate || 'End date'}</p>
            </div>
          </li>
        ))}
        {(!experience || experience.length <= 0) && (
          <>
            <li className='Experience-item'>Experience example</li>
            <li className='Experience-item'>Experience example</li>
          </>
        )}
      </ul>
    </section>
  );
};

export default Experience;
