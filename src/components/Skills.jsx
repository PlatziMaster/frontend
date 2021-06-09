import React from 'react';
import ProgressBar from './Progressbar';

const Skills = ({ skills }) => (
  <section className='Skills'>
    <h2 className='Skills-title'>Skills</h2>
    {skills ? skills.map(skill => (
      <div className='Skills-item' key={`${skill.name}`}>
        <ProgressBar skill={skill} />
      </div>
    )) : (
      <>
        <div className='Skills-item'>Skills-item</div>
        <div className='Skills-item'>Skills-item</div>
        <div className='Skills-item'>Skills-item</div>
      </>
    )}
  </section>
);

export default Skills;
