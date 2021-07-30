import React from 'react';
import '../styles/components/Skills.styl';

const Skills = ({ softskills, hardskills }) => {

  return (
    <div className='Skills-title'>
      <h4>- My Skills</h4>
      <h2>Hardskills</h2>
      {
        hardskills?.map((h) => {
          return (
            <div key={h} className='Skills-item'>
              <p>{h}</p>
            </div>
          );
        })
      }

      <h2>Softskills</h2>
      {
        softskills?.map((s) => {
          return (
            <div key={s} className='Skills-item'>
              <p>{s}</p>
            </div>
          );
        })
      }
    </div>
  );
};

export default Skills;
