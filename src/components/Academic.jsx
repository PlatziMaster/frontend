import React from 'react';
import uniqid from 'uniqid';
import '../styles/components/Academic.css';

const Academic = ({ academic }) => {
  return (
    <div className='academic'>
      <div className='Academic-title'>Formación académica</div>
      {
        (academic) ?
          academic.map(item => <li key={uniqid()}>{item.degree}</li>) :
          null
      }
      <div className='Academic-item' />
      <div className='Academic-item' />
      <div className='Academic-item' />
    </div>
  );
};

export default Academic;
