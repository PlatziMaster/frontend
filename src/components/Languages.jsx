import React from 'react';

export default function Languages({ data }) {
  return (
    <div className='languajes small'>
      <h2>
        Lenguajes
      </h2>
      <ul>
        {data.map(d => (
          <li key={d.name}>
            <h3>{d.name}</h3>
            <p>{d.percentage}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
