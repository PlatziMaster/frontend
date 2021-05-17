import React from 'react';
import uniqid from 'uniqid';
import '../styles/components/Skills.css';

const Skills = ({ skills }) => {
  return (
    <div className='skills'>
      <div className='Skills-title'>Habilidades</div>
      {
        (skills) ?
          skills.map(item => <li key={uniqid()}>{item.name}</li>) :
          null
      }
      <div className='Skills-item' />
      <div className='Skills-item' />
      <div className='Skills-item' />
    </div>
  );
};

export default Skills;
