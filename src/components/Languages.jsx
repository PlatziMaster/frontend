import React from 'react';
import uniqid from 'uniqid';
import '../styles/components/Languaje.css';

const Languages = ({ languages }) => {
  return (
    <div className='languages'>
      <div className='Languages-title title'>Idiomas</div>
      <ul className='languages-bar'>
        {
          (languages) ?
            languages.map(item => <li key={uniqid()}>{item.name} - {item.percentage}</li>) :
            null
        }
      </ul>
      <div className='Languages-item' />
      <div className='Languages-item' />
      <div className='Languages-item' />
    </div>
  );
};

export default Languages;
