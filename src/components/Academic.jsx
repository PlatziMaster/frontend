import React from 'react';
import '../styles/components/Academic.styl';

const Academic = ({ academic = [], certificate = [] }) => {
  const listAca = academic.map(item => (
    <li className='Academic-item' key={item.degree}>
      <div className='item-head'>
        <span>{item.institution}</span>
        <p>{`${item.startDate} - ${item.endDate}`}</p>
      </div>
      <span className='degree'>{item.degree}</span>
      <ul>
        {item.description.map(e => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </li>
  ));

  const listCer = certificate.map(item => (
    <li className='Academic-item' key={item.date}>
      <div className='item-head'>
        <span>{item.institution}</span>
        <p>{item.date}</p>
      </div>
      <span className='degree'>{item.name}</span>
      <ul>
        {item.description.map(e => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <div className='Academic'>
      <span className='title'>ACADEMIC</span>
      <div className='short-line'>_</div>
      <ul className='Academic-list'>
        {academic.length ? listAca : <p className='empty'>No data</p>}
      </ul>
      {certificate.length ? (
        <>
          <span className='courses'>COURSES</span>
          {listCer}
        </>
      ) : null}
    </div>
  );
};

export default Academic;
