import React from 'react';
import '../styles/components/Skills.styl';

const Skills = ({ skills = [] }) => {
  const list = skills.map(item => (
    <li className='Skills-item' key={item.name}>
      <span>{ item.name }</span>
      <div className='long-line'>-</div>
    </li>
  ));

  return (
    <div className='Skills'>
      <span className='Skills-title'>SKILLS</span>
      <div className='short-line'>_</div>
      <ul>
        { skills.length ? list : <p className='empty'>No data</p>}
      </ul>
    </div>
  );
};

export default Skills;
