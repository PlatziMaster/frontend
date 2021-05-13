import React from 'react';

const Interest = ({ title, description }) => {
  return (
    <div className='container'>
      <h2>{title}</h2>
      {description.map(item => (
        <div key={`Interest ${item}`}>
          <hr />
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default Interest;
