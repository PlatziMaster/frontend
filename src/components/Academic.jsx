import React from 'react';
import '../styles/components/Academic.css';

export default function Academic({ title, academic }) {
  return (
    <div className='academic'>
      <h3 className='academic-title'>{title}</h3>
      {academic && academic?.map((item) => {
        return (
          <div className='academic-item' key={academic.indexOf(item)}>
            <h3 className='degree Academic-item'>{item.degree}</h3>
            <h5 className='university Academic-item'>{[item.institution]}</h5>
            <p className='Academic-item'>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}
