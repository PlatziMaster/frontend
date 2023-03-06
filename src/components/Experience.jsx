import React from 'react';
import '../styles/components/Experience.styl';

const Experience = ({ experience = [] }) => {
  return (
    <div className='section two-cols'>
      <div className='title-section'>
        <h2 className='Experience-title'>Experiencia</h2>
      </div>
      <div className='desc-section'>
        {experience.map((item) => {
          return (
            <div key={item.jobTitle} className='Experience-item'>
              <h3>{item.jobTitle}</h3>
              <p className='company'>{item.company}</p>
              <p className='dates'>
                {item.startDate}-{item.endDate}
              </p>
              <p className='description'>{item.jobDescription}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Experience;
