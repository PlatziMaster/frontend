import React from 'react';

const Experience = ({ experience }) => {
  return (
    <section className='Experience'>
      <h2 className='Experience-title'>Experience</h2>
      {experience ? experience.map(exp => (
        <div className='Experience-item' key={`${exp.jobTitle}`}>
          <h3>{exp.jobTitle}</h3>
          <p>
            <b>{exp.company}</b>
            {' '}
            <small>{`${exp.startDate} - ${exp.endDate}`}</small>
          </p>
          <p>{exp.jobDescription}</p>
        </div>
      )) : (
        <>
          <div className='Experience-item'>Experience-item</div>
          <div className='Experience-item'>Experience-item</div>
          <div className='Experience-item'>Experience-item</div>
        </>
      )
      }
    </section>
  );
};

export default Experience;
