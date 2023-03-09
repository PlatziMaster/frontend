import React from 'react';

const Skills = ({ skills }) => {
  return (
    <div>
      <h2 className='Skills-title'>
        Skills
      </h2>
      {skills?.map(sk => (
        <div className='Skills-item' key={sk.name}>
          {`${sk.name} - (${sk.percentage})`}
        </div>
      ))}
    </div>
  );
};

export default Skills;