import React from 'react';
import '../styles/components/Experience.styl';

export const Job = ({
  avatar,
  jobTitle,
  company,
  startDate,
  endDate,
  jobDescription,
}) => {
  return (
    <div className='job-box'>
      <div className='job-wrapper-avatar'>
        <div className='job-avatar'>
          <img src={avatar} alt={company} />
        </div>
        <div>
          <p className='job-title'>{jobTitle}</p>
          <p className='job-company'>{company}</p>
          <p className='job-date'>
            <span>{startDate}</span>
            <span>-</span>
            <span>{endDate}</span>
          </p>
        </div>
      </div>
      <p>{jobDescription}</p>
    </div>
  );
};

const Experience = ({ experience }) => {
  return (
    <div className='wrapper'>
      <h3>Experience</h3>
      <div className='job-grid'>
        {experience &&
          experience.map((exp, i) => (
            <Job key={`${Math.random(i)}`} {...exp} />
          ))}
      </div>
    </div>
  );
};

export default Experience;
