import React from 'react';

function Languages({ data }) {
  return (
    <section className='Languages'>
      <h2 className='Languages-title'>Languages</h2>

      <ul className='Languages-list'>
        {data.languages?.map(({ name, level }) => (
          <li key={name} className='Languages-item'>
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            {name} - {level}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Languages;