import React from 'react';

function Interest({ data }) {
  return (
    <section className='Interest'>
      <h2 className='Interest-title'>Interest</h2>

      <ul className='Interest-list'>
        {data.interest?.map(group => (
          <li key={group.join('')} className='Interest-item'>
            {group.join(' | ')}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Interest;
