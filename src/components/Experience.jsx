import React from 'react';

const Experience = ({ data = [] }) => {

  const list = data.map(item => (
    <li className='Academic-item' key={item.company}>
      <div className='item-head'>
        <span>{ `${item.jobTitle}` }</span>
        <p>{ `${item.startDate} - ${item.endDate}` }</p>
        <p className='company'>{ `${item.company}` }</p>
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
      <span className='title'>Experience</span>
      <ul className='Experience-list'>
        { data.length ? list : <p className='empty'>No data</p>}
      </ul>
    </div>
  );
};

export default Experience;
