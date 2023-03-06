import React from 'react';

function Courses({ data }) {
  return (
    <section className='Courses'>
      <h2 className='Courses-title'>Courses</h2>

      <div className='Courses-list'>
        {data.courses?.map(({ name, institution }) => (
          <article key={name} className='Courses-item'>
            <h3 className='Courses-item-title'>{name}</h3>

            <span className='Courses-item-details'>{institution}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Courses;