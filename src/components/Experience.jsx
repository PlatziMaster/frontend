import React from 'react';

const Experience = ({ data = [] }) => {

  const list = data.map(item => (
    <li className='Experience-item' key={item.company}>
      <span>{ item.company }</span>
      <span>{ item.jobTitle }</span>
      <p>{ item.jobDescription }</p>
      <p>{ `${item.startDate} - ${item.endDate}` }</p>
    </li>
  ));

  return (
    <div className='Experience'>
      <span className='Experience-title'>Experience</span>
      <ul className='Experience-list'>
        { data.length ? list : <p className='empty'>No data</p>}
      </ul>
    </div>
  );
};

export default Experience;
