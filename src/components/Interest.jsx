import React from 'react';
import '../styles/components/Interest.styl';

/*Componente que muestra los intereses del estudiante*/

const Interest = ({ interest }) => {
  return (
    <section className='Interest card'>
      <h2 className='Interest-title'>Interest</h2>
      <ul className='Interest-list grid'>
        {interest?.map(item => (
          <li key={item} className='Interest-item'>
            <p>{item || 'Interest'}</p>
          </li>
        ))}
        {(!interest || interest.length <= 0) && (
          <>
            <li className='Interest-item'>Interest</li>
            <li className='Interest-item'>Interest</li>
            <li className='Interest-item'>Interest</li>
          </>
        )}
      </ul>
    </section>
  );
};

export default Interest;
