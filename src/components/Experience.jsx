import React from 'react';

const Experience = ({ data = [] }) => {

  const list = data.map(item => (
    <li className='Academic-item' key={item.company}>
      <div className='item-head'>
        <span>{ `${item.jobTitle} at ${item.company}` }</span>
        <p>{ `${item.startDate}/${item.endDate}` }</p>
      </div>
      <ul>
        {item.jobDescription.map(e => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <div className='Experience'>
      <span className='title'>EXPERIENCE</span>
      <div className='short-line'>_</div>
      <ul className='Experience-list'>
        { data.length ? list : <p className='empty'>No data</p>}
      </ul>
    </div>
  );
};

export default Experience;
