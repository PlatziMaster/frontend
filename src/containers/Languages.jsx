import React from 'react';

const Languages = ({ title, description }) => {
  return (
    <div className='container'>
      <h2>{title}</h2>
      {description.map(item => (
        <div key={`Languages ${item.name}`}>
          <hr />
          <p>{`name: ${item.name}`}</p>
          <p>{`percentage: ${item.percentage}`}</p>
        </div>
      ))}
    </div>
  );
};

export default Languages;
