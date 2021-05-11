import React from 'react';

const Languages = ({ data = [] }) => {
  const list = data.map(item => (
    <li className='Languages-item' key={item.name}>
      <span>{ item.name }</span>
      <span>{ item.percentage }</span>
    </li>
  ));
  return (
    <div className='Languages'>
      <span className='Languages-title'>Languages</span>
      <ul className='Languages-list'>
        { data.length ? list : <p className='empty'>No data</p>}
      </ul>
    </div>
  );
};

export default Languages;
