import React from 'react';

export default function Skills({ data }) {
  return (
    <div className='skills small'>
      <h2>
        Habilidades
      </h2>
      <ul>
        {data.map(d => (
          <li key={d.name}>
            <h4>{d.name}</h4>
            <p>{d.percentage}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
