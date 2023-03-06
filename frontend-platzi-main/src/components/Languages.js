import React from 'react';
import '../index.css';
import data from '../data/data.json';

const Languages = () => {
  const languages = data.data.languages;

  return (
    <div className='column-list-container'>
      <h2 className='column-title'>Lenguajes</h2>
      <ul className='column-list'>
        {languages.map((language, index) => (
          <li className='column-item' key={index}>
            <p>{language.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;

