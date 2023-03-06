import React from 'react';

export default function Academic({ data }) {
  return (
    <div className='academic small'>
      <h2>
        Títulos académicos
      </h2>
      <ul>
        {data.map(d => (
          <li key={d.degree}>
            <p>
              {d.degree}
              -
              {d.institution}
            </p>
            <h5>{d.description}</h5>
          </li>
        ))
        }

      </ul>
    </div>
  );
}
