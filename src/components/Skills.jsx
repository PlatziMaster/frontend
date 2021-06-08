import React from 'react';

const Skills = ({ skills }) => (
  <section className='Skills'>
    <h2 className='Skills-title'>Skills</h2>
    {skills ? skills.map(skill => (
      <div className='Skills-item' key={`${skill.name}`}>{`${skill.name}: ${skill.percentage}`}</div>
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
