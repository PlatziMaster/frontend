import React from 'react';
import '../styles/components/Skills.styl';

const Skills = (data) => {
  const { skills } = data;
  return (
    <section className='Skills-container'>
      <h2 className='Skills-title'>Skills</h2>
      <div className='Skills-items-container'>
        { skills &&
          skills.map(item => (
            <div className='Skills-item' key={skills.indexOf(item)}>
              <h3 className='Skills-name'>{item.name}</h3>
              <p className='Skills-percentage'>{item.percentage}</p>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Skills;
