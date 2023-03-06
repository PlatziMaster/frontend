import React from 'react';
import '../index.css';
import data from '../data/data.json';

const Academic = () => {
  const academicData = data.data.Academic;

  return (
    <div className='academic-container'>
      <h2 className='academic-title'>Educacion</h2>
      <div class="academic-list-container">
        <ul className='academic-list'>
          {academicData.map((item, index) => (
            <li className='academic-item' key={index}>
              <h3>{item.name}</h3>
              <p>{item.institution}</p>
              <p>{item.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Academic;
