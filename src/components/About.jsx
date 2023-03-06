import React from 'react';

function About({ data }) {
  return (
    <section className='About'>
      <h2 className='About-title'>
        {data.name}
        &nbsp;
        <span>{data.profession}</span>
      </h2>

      <span>
        <span className='emoji' role='img' aria-label='Mexico flag'>
          🇲🇽
        </span>
        {data.address}
      </span>

      <ul className='About-social'>
        {data.social?.map(({ name, url }) => (
          <li key={name} className='About-item'>
            <a href={url}>{name}</a>
          </li>
        ))}

        <li className='About-item'>
          <a href={`mailto:${data.email}`}>{data.email}</a>
        </li>
      </ul>
    </section>
  );
}

export default About;