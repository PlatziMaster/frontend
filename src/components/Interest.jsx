import React from 'react';

const Interest = ({ interest }) => {
  return (
    <section className='Interest'>
      <h2 className='Interest-title'>Interests</h2>
      {interest ? interest.map(item => (
        <div className='Interest-item' key={`${item}`}>{`${item}`}</div>
      )) : (
        <>
          <div className='Interest-item'>Interest Item</div>
          <div className='Interest-item'>Interest Item</div>
          <div className='Interest-item'>Interest Item</div>
        </>
      )
      }
    </section>
  );
};

export default Interest;
