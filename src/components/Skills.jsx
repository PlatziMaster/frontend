import React from 'react';

const Skills = ({ data = [] }) => {
  const list = data.map(item => (
    <li className='list-item' key={item.name}>
      <span>{ item.name }</span>
      <div className='long-line'>-</div>
    </li>
  ));

  return (
    <div className='Skills'>
      <span className='title'>SKILLS</span>
      <div className='short-line'>_</div>
      <ul>
        { data.length ? list : <p className='empty'>No data</p>}
      </ul>
    </div>
  );
};

export default Skills;
