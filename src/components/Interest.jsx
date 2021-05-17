import React from 'react';
import uniqid from 'uniqid';
import '../styles/components/Interest.css';

const Interes = ({ interest }) => {
  return (
    <div className='interest'>
      <div className='Interest-title title'>Intereses</div>
      <ul className='lista-de-intereses'>
        {
          (interest) ?
            interest.map((item, i) => <li key={uniqid()} className=''>{item}</li>) :
            null
        }
      </ul>
      <div className='Interest-item' />
      <div className='Interest-item' />
      <div className='Interest-item' />
    </div>
  );
};

export default Interes;
