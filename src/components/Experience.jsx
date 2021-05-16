import React from 'react';
import uniqid from 'uniqid';

const Experience = ({ experience }) => {

  return (
    <div>
      <div className='Experience-title'>Experiencia</div>
      <div className='experience'>
        {
          (experience) ?
            experience.map(item => <li key={uniqid()}>{item.company}</li>) :
            null
        }
      </div>
      <div className='Experience-item' />
      <div className='Experience-item' />
      <div className='Experience-item' />

    </div>
  );
};

export default Experience;
