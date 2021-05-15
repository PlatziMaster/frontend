import React from 'react';
import '../styles/components/Interest.css';

const Interest = ({ info }) => {
  return (
    <div className='interest'>
      <h1 className='Interest-title'>My Interests: </h1>
      <ul className='interest-list'>
        {
          info.map(interest => (
            <li className='Interest-item' key={interest}>{interest}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default Interest;
