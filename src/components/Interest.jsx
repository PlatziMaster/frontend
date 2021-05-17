import React from 'react';
import uniqid from 'uniqid';
import '../styles/components/Interest.css';

const Interes = ({ interest }) => {
  return (
    <div className='interest'>
      <div className='Interest-title'>Intereses</div>
      {
        (interest) ?
          interest.map((item, i) => <li key={uniqid()}>{item}</li>) :
          null
      }
      <div className='Interest-item' />
      <div className='Interest-item' />
      <div className='Interest-item' />
    </div>
  );
};

export default Interes;
