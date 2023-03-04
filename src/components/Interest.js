import React from 'react';

export default function Interest({ interest }) {
  return (
    <div className='interest content'>
      <h2 className='Interest-title'>Interest</h2>
      <div className='content'>
        {interest?.map(item => (
          <p className='Interest-item'>{item}</p>
        ))}
      </div>
    </div>
  );
}
