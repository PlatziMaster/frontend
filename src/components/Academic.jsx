import React from 'react';
import '../styles/components/Academic.styl';

const Academic = ({ academic = [], certificate = [] }) => {

  const listCer = certificate.map(item => (
    <li className='Academic-item' key={item.date}>
      <div className='item-head'>
        <span>{item.institution} - {item.name}</span>
        <p>{item.date}</p>
      </div>

      <ul>
        {item.description.map(e => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </li>
  ));


  const listAca = academic.map(item => (
    <li className='Academic-item' key={item.degree}>
      <div className='item-head'>
        <span>{item.institution} - {item.degree}</span>
        <p>{`${item.startDate} - ${item.endDate}`}</p>
      </div>

      <ul>
        {item.description.map(e => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </li>
  ));


  return (
    <div className='Academic'>
          {certificate.length ? (
        <>
          <span className='certificate'>Certificate</span>
          {listCer}
        </>
      ) : null}
      <span className='title'>Academic</span>
      <ul className='Academic-list'>
        {academic.length ? listAca : <p className='empty'>No data</p>}
      </ul>

    </div>
  );
};

export default Academic;
