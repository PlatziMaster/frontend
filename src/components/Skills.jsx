import React from 'react';

const Skills = ({ softskills = [], hardskills = [] }) => {

  return (
    <div className='skills__container'>
      <h4>- My Skills</h4>
      <h2>Hardskills</h2>
      {
        hardskills.map((h) => {
          return (
            <div key={h} className='skills__hardskills'>
              <h3>{h}</h3>
            </div>
          );
        })
      }

      <h2>Softskills</h2>
      {
        softskills.map((s) => {
          return (
            <div key={s} className='skills__softskills'>
              <h3>{s}</h3>
            </div>
          );
        })
      }
    </div>
  );
};

export default Skills;
