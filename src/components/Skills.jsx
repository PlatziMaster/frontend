import React from 'react';

function Skills({ data }) {
  return (
    <section className='Skills'>
      <h2 className='Skills-title'>Skills</h2>

      <ul className='Skills-list'>
        {data.skills?.map(group => (
          <li key={group.join('')} className='Skills-item'>
            {group.join(' | ')}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
