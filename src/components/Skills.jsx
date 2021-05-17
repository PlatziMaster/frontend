import React from 'react';
import uniqid from 'uniqid';
import '../styles/components/Skills.css';

const Skills = ({ skills }) => {
  return (
    <div className='skills'>
      <div className='Skills-title title'>Habilidades</div>
      <ul className='habilidades'>
        {
          (skills) ?
            skills.map(item => <li key={uniqid()} className='borde-habilidades'>{item.name}</li>) :
            null
        }
      </ul>
      <div className='Skills-item' />
      <div className='Skills-item' />
      <div className='Skills-item' />
    </div>
  );
};

export default Skills;
