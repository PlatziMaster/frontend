import React from 'react';

const Interest = ({ data = [] }) => {
  const list = data.map(item => (
    <li className='Interest-item' key={item}>{item}</li>
  ));
  return (
    <div className='Interest'>
      <span className='Interest-title'>Interest-title</span>
      <ul className='Interest-list'>
        { data.length ? list : <p className='empty'>No data</p>}
      </ul>
    </div>
  );
};

export default Interest;
