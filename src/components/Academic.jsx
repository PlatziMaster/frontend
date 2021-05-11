import React from 'react';

const Academic = ({ data = [] }) => {
  const list = data.map(item => (
    <li className='Academic-item' key={item.degree}>
      <span>{ item.degree }</span>
      <span>{ item.institution }</span>
      <p>{ item.description }</p>
      <p>{ `${item.startDate} - ${item.endDate}` }</p>
    </li>
  ));
  return (
    <div className='Academic'>
      <span className='Academic-title'>Academic</span>
      <ul className='Academic-list'>
        { data.length ? list : <p className='empty'>No data</p>}
      </ul>
    </div>
  );
};

export default Academic;
