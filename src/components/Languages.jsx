import React from 'react';
import uniqid from 'uniqid';
import '../styles/components/Languaje.css';

const Languages = ({ languages }) => {
  return (
    <div className='languages'>
      <div className='Languages-title'>Languajes Title</div>
      {
        (languages) ?
          languages.map(item => <li key={uniqid()}>{item.name}</li>) :
          null
      }
      <div className='Languages-item' />
      <div className='Languages-item' />
      <div className='Languages-item' />
    </div>
  );
};

export default Languages;
