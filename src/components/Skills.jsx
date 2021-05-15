import React from 'react';
import '../styles/components/Skills.css';

const Skills = ({ info }) => {

  return (
    <div className='skills'>
      <h1 className='Skills-title'>My skills:</h1>
      <ul className='skill-list'>
        {
          info.map(skill => (
            <li className='Skills-item' key={skill.name}>
              <p>
                <b>
                  {skill.name}
                  :
                  {' '}
                </b>
                {skill.percentage}
              </p>
              <div id='progressbar'>
                <div style={{ width: skill.percentage }} />
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Skills;
