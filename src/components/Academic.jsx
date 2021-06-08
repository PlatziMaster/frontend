import React from 'react';

const Academic = ({ academic }) => (
  <section className='Academic'>
    <h2 className='Academic-title'>Academic</h2>
    {academic ? (
      academic.map(item => (
        <div className='Academic-item' key={`${item.degree}`}>
          <h3>{item.degree}</h3>
          <h4>{item.institution}</h4>
          <p>{item.description}</p>
          <p>
            <small>{`${item.startDate} - ${item.endDate}`}</small>
          </p>
        </div>
      ))
    ) : (
      <>
        <div className='Academic-item'>Academic-item</div>
        <div className='Academic-item'>Academic-item</div>
        <div className='Academic-item'>Academic-item</div>
      </>
    )}
  </section>
);

export default Academic;
