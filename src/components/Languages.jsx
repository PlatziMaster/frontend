import React from 'react';

const Languages = ({ languages }) => (
  <section className='Languages'>
    <h2 className='Languages-title'>Languages</h2>
    {languages ? languages.map(({ name, percentage }) => (
      <div className='Languages-item' key={`${name}`}>{`${name}: ${percentage}`}</div>
    )) : (
      <>
        <div className='Languages-item'>Languages-item</div>
        <div className='Languages-item'>Languages-item</div>
        <div className='Languages-item'>Languages-item</div>
      </>
    )}
  </section>
);

export default Languages;
