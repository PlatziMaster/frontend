import React from 'react';
import '../index.css';
import data from '../data/data.json';

const Experience = () => {
  return (
    <div className='academic-container'>
      <h2 className='academic-title'>Experience</h2>
      <ul className='academic-list'>
        {data.data.experience.map((exp, index) => (
          <li className='academic-item' key={index}>
            <h3>{exp.company}</h3>
            <p>{exp.jobTitle}</p>
            <p>{exp.startDate} - {exp.endDate}</p>
            <p>{exp.jobDescription}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;

