import React from 'react';
import '../styles/components/Languages.styl';

/*Componente que muestra los lenguajes que maneja el estudiante*/

const Languages = ({ languages }) => {
  return (
    <section className='Languages card'>
      <h2 className='Languages-title'>Languages</h2>
      <ul className='Languages-list grid'>
        {languages?.map(item => (
          <li key={item.name} className='Languages-item grid'>
            <p>{item?.name || 'Title'}</p>
          </li>
        ))}

        {(!languages || languages.length <= 0) && (
          <>
            <li className='Languages-item'>Language example</li>
            <li className='Languages-item'>Language example</li>
          </>
        )}
      </ul>
    </section>
  );
};

export default Languages;
