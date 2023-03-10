import React from 'react';

const Experience = ({ experience }) => {
  return (
    <div className='Experience-content'>
      <h2 className='Experience-title'>
        Experience
      </h2>
      <div className='Experience-items'>
        <ul>
          {experience?.map(exp => (
            <li className='Experience-item' key={exp.jobTitle}>
              {`${exp.jobTitle} - (${exp.jobDescription})`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;