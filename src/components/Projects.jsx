import React from 'react';

function Projects({ data }) {
  return (
    <section className='Projects'>
      <h2 className='Projects-title'>Projects</h2>

      <div className='Projects-list'>
        {data.projects?.map(({ name, description }) => (
          <article key={name} className='Projects-item'>
            <h3 className='Projects-item-title'>{name}</h3>

            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;