import React from 'react';
import '../styles/components/Experience.styl';

const Experience = ({ experience = [] }) => {

  const list = experience.map(item => (
    <li className='Experience-item' key={item.company}>
      <div className='item-head'>
        <span>{ `${item.jobTitle} at ${item.company}` }</span>
        <p>{ `${item.startDate}/${item.endDate}` }</p>
      </div>
      <ul>
        {item.jobDescription}
      </ul>
    </li>
  ));

  return (
    <div className='Experience'>
      <span className='Experience-title'>EXPERIENCE</span>
      <div className='short-line'>_</div>
      <ul className='Experience-list'>
        { experience.length ? list : <p className='empty'>No data</p>}
      </ul>
    </div>
  );
};

export default Experience;
