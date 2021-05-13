import React from 'react';

const Academic = ({ title, description }) => {
  return (
    <div className='container'>
      <h2>{title}</h2>
      {description.map(item => (
        <div key={`Academic ${item.description}`}>
          <hr />
          <p>{`degree: ${item.degree}`}</p>
          <p>{`description: ${item.description}`}</p>
          <p>{`endDate: ${item.endDate}`}</p>
          <p>{`institution: ${item.institution}`}</p>
          <p>{`startDate: ${item.startDate}`}</p>
        </div>
      ))}
    </div>
  );
};

export default Academic;
