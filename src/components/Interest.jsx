import React from 'react';

export default function Interest({ data }) {
  return (
    <div className='interests small'>
      <h2>
        Intereses
      </h2>
      <ul>
        {data.map(d => (
          <li key={d}>
            <h3>{d}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
