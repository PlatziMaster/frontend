import React from 'react';

const Interest = ({ interest = [] }) => {
  return (
    <div className='section two-cols'>
      <div className='title-section'>
        <h2 className='Interest-title'>Intereses</h2>
      </div>
      <div className='desc-section'>
        {interest.map((item) => {
          return (
            <p key={item} className='Interest-item'>
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Interest;
