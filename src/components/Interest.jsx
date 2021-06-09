import React from 'react';

const Interest = ({ interest }) => {
  return (
    <section className='Interest'>
      <h2 className='Interest-title'>Interests</h2>
      {interest ? interest.map(item => (
        <h3 className='Interest-item' key={`${item}`}>{`${item}`}</h3>
      )) : (
        <>
          <h3 className='Interest-item'>Interest Item</h3>
          <h3 className='Interest-item'>Interest Item</h3>
          <h3 className='Interest-item'>Interest Item</h3>
        </>
      )
      }
    </section>
  );
};

export default Interest;
