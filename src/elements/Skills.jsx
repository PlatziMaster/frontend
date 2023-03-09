import React from 'react';
import { GiGuitarHead } from 'react-icons/gi';

const Skills = ({ skills }) => {
  return (
    <div className='box skills'>
      <div className='flex align-items-center gap-2'>
        <GiGuitarHead color='#588B8B' />
        <div className='title'>Skills</div>
      </div>
      <div style={{ marginTop: '8px' }}>
        {skills &&
          skills.length > 0 &&
          skills.map((skill, index) => {
            return (
              <div key={skill.name} className='progress-container'>
                <div className='skill-name'>{skill.name}</div>
                <div className='progress'>
                  <div
                    className='progress-bar'
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Skills;
