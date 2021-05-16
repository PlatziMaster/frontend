import React from 'react';
import uniqid from 'uniqid';

const Skills = ({ skills }) => {
  return (
    <>
      <div className='Skills-title'>Habilidades</div>
      <div className='skills'>
        {
          (skills) ?
            skills.map(item => <li key={uniqid()}>{item.name}</li>) :
            null
        }
      </div>

      <div className='Skills-item' />
      <div className='Skills-item' />
      <div className='Skills-item' />
    </>
  );
};

export default Skills;
