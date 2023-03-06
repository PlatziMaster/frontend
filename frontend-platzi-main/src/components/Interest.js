import React from 'react';
import '../index.css';
import data from '../data/data.json';

const Interest = () => {
  const interests = data.data.interest;

  return (
    <div className='column-list-container'>
      <h2 className='column-title'>Intereses</h2>
      <ul className='column-list'>
        {interests.map((interest, index) => (
          <li className='column-item' key={index}>
            <p>{interest}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Interest;
