import React from 'react';
import '../styles/components/Skills.styl';

const Skills = ({ skills = [] }) => (
  <section className='Skills'>
    <h2 className='Skills-title'>Skills</h2>
    <div className='Skills__Wrapper'>
      {skills.map(({ name, percentage }) => (
        <p className='Skills-item' key={name}>
          {name}
          {' - '}
          {percentage}
        </p>
      ))}
    </div>
  </section>
);

export default Skills;
