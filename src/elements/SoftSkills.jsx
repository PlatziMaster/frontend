import React from 'react';
import { FaBrain } from 'react-icons/fa';

const SoftSkills = ({ softskills }) => {
  return (
    <div className='box soft-skills'>
      <div className='flex align-items-center gap-2'>
        <FaBrain color='#588B8B' />
        <div className='title'>Soft skills</div>
      </div>
      <div className='flex'>
        <div className='vertical' />
        <ul>
          {softskills &&
            softskills.length > 0 &&
            softskills.map((soft) => {
              return <li key={soft}>{soft}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default SoftSkills;
