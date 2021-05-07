import React from 'react';

import '../styles/components/Experience.styl';

const Experience = ({ experience = [] }) => (
  <section className='Experience'>
    <h2 className='Experience-title'>Experience</h2>
    <div className='Experience__wrapper'>
      {experience.map(({ jobTitle, company, endDate, jobDescription, startDate }) => (
        <div className='Experience-item' key={jobTitle}>
          <h3>{company}</h3>
          <h4>{jobTitle}</h4>
          <time>
            {startDate}
            {' - '}
            {endDate}
          </time>
          <p>{jobDescription}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
