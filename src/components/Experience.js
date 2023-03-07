import React from 'react';

const Experience = ({ userData }) => {
  return (
    <div>
      <div className='Experience-title'>
        Experiencia
      </div>
      <div className='Experience-items'>
        <ul>
          {userData?.experience?.map(exp => (
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
