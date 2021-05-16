import React from 'react';
import uniqid from 'uniqid';

const Academic = ({ academic }) => {
  return (
    <>
      <div className='Academic-title'>Formación académica</div>
      <div className='academic'>
        {
          (academic) ?
            academic.map(item => <li key={uniqid()}>{item.degree}</li>) :
            null
        }
      </div>

      <div className='Academic-item' />
      <div className='Academic-item' />
      <div className='Academic-item' />
    </>
  );
};

export default Academic;
