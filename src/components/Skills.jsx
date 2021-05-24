import React from 'react';
import '../styles/components/Skills.styl';

const Skills = ({
  skills,
}) => {

  return (
    <div className='skills'>
      <h2 className='skills-title'>Skills</h2>
      {skills &&
        skills.map((item, index) => {
          const { id } = index;
          return (
            <div key={id} className='skills-item'>
              <h3 className='skills-name'>{item.name}</h3>
              <progress
                value={item.percentage}
                max='100'
              >
                {item.percentage}
              </progress>
            </div>
          );
        })}
    </div>
  );
};

export default Skills;
