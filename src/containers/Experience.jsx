import React from 'react';

const Experience = ({ title, description }) => {
  return (
    <div className='container'>
      <h2>{title}</h2>
      {description.map(item => (
        <div key={`Experience ${item.company}`}>
          <hr />
          <p>{`company: ${item.company}`}</p>
          <p>{`endDate: ${item.Present}`}</p>
          <p>{`jobDescription: ${item.jobDescription}`}</p>
          <p>{`jobTitle: ${item.jobTitle}`}</p>
          <p>{`startDate: ${item.startDate}`}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
