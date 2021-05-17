import React from 'react';
import uniqid from 'uniqid';
import '../styles/components/Academic.css';

const Academic = ({ academic }) => {
  return (
    <div className='academic'>
      <div className='Academic-title title'>Formación académica</div>
      <ul className='lista-academica'>
        {
          (academic) ?
            academic.map(item =>
              <li key={uniqid()}>
                <h4 className='title2'>{item.institution} <span className='subtitles'>({item.degree} - {item.endDate} )</span></h4>
                <section>
                  <p className='contenido-detalles'>{item.description}</p>
                </section>
            </li>) :
            null
        }
      </ul>
      <div className='Academic-item' />
      <div className='Academic-item' />
      <div className='Academic-item' />
    </div>
  );
};

export default Academic;
