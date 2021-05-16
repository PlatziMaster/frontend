import React from 'react';
import uniqid from 'uniqid';

const Interes = ({ interest }) => {
  return (
    <>
      <div className='Interest-title'>Intereses</div>
      <div className='interest'>
        {
          (interest) ?
            interest.map((item, i) => <li key={uniqid()}>{item}</li>) :
            null
        }
      </div>

      <div className='Interest-item' />
      <div className='Interest-item' />
      <div className='Interest-item' />
    </>
  );
};

export default Interes;
