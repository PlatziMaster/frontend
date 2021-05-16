import React from 'react';

const Languages = ({ data = [] }) => {
  const list = data.map(item => (
    <li className='list-item' key={item.name}>
      <span>{ item.name }</span>
    </li>
  ));
  return (
    <div className='Languages'>
      <span className='title'>Languages</span>
      <ul>
        { data.length ? list : <p>No data</p>}
      </ul>
    </div>
  );
};

export default Languages;
