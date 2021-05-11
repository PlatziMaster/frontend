import React from 'react';

const Skills = ({ data = [] }) => {
  const list = data.map(item => (
    <li className='Skills-item' key={item.name}>
      <span>{ item.name }</span>
      <span>{ item.percentage }</span>
    </li>
  ));

  return (
    <div className='Skills'>
      <span className='Skills-title'>Skills</span>
      <ul className='Skills-list'>
        { data.length ? list : <p className='empty'>No data</p>}
      </ul>
    </div>
  );
};

export default Skills;
