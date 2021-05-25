import React from 'react';
import '../styles/components/Academic.styl';

/*Componente que muestra por parametro la formación academica*/

const Academic = ({ certificate }) => {
  return (
    <section className='Academic card'>
      <h2 className='Academic-title'>Academic</h2>
      <ul className='Academic-list grid'>
        {certificate?.map(item => (
          <li key={item?.name} className='Academic-item grid'>
            <div className='flex'>
              <p><strong>{item?.name || 'Title'}</strong></p>
              <p className='badge'>{item?.institution || 'Intitution'}</p>
            </div>
            <p>{item?.description || 'Description'}</p>
            <p>{item?.date || 'Date'}</p>
          </li>
        ))}
        {(!certificate || certificate.length <= 0) && (
          <>
            <li className='Academic-item'>Academic example</li>
            <li className='Academic-item'>Academic example</li>
            <li className='Academic-item'>Academic example</li>
          </>
        )}
      </ul>
    </section>
  );
};

export default Academic;
