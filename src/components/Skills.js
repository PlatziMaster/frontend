import React from 'react';

const Skills = ({ userData }) => {
  return (
    <div>
      <div className='Skills-title'>
        Skills
      </div>
      <div className='Skills-items'>
        <ul>
          {userData?.skills?.map(skill => (
            <li className='Skills-item' key={skill.name}>
              {`${skill.name} - (${skill.percentage})`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
