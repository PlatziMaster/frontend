import React from 'react';
import uniqid from 'uniqid';

const Languages = ({ languages }) => {
  return (
    <>
      <div className='Languages-title'>Languajes Title</div>
      <div className='languages'>
        {
          (languages) ?
            languages.map(item => <li key={uniqid()}>{item.name}</li>) :
            null
        }
      </div>

      <div className='Languages-item' />
      <div className='Languages-item' />
      <div className='Languages-item' />
    </>
  );
};

export default Languages;
