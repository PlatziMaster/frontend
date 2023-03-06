import React from 'react';

const Skills = ({ skills = [] }) => {
  return (
    <div className='section two-cols'>
      <div className='title-section'>
        <h2 className='Skills-title'>Skills</h2>
      </div>
      <div className='desc-section'>
        {skills.map((item) => {
          return (
            <p key={item.name} className='skills-item'>
              {item.name}
              <span>{item.level}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
