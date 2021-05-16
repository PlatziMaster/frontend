import React from 'react';

const Skills = ({ data = [] }) => {
  const list = data.map(item => (
    <li className='list-item' key={item.name}>
      <span>{ item.name }</span>
    </li>
  ));

  return (
    <div className='Skills'>
      <span className='title'>Skills</span>
      <ul>
        { data.length ? list : <p className='empty'>No data</p>}
      </ul>
    </div>
  );
};

export default Skills;
