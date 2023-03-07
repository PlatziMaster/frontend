import React from 'react';
import Flag from 'react-world-flags';

function About({ data }) {
  return (
    <section className='about'>
        <h2 className='title column'>
            {data.name}
        </h2>
        <br/>
        <h3 className='About-prof'>
            {data.profession}
        </h3>
      

      <span className='flag'>
        <Flag code="col" height="16" />
        {data.address}
      </span>

      <ul className='about'>
        {data.social?.map(({ name, url, icon }) => (
          <li key={name} className='lista'>
            <a href={url}><img
                src={icon}
                width='30'
                alt='Social'
                />    
            </a>
          </li>
        ))}

        <li className='About-item'>
            <a href={`mailto:${data.email}`}><img
                src={data.icon}
                width='35'
                alt='Mail'
                />  
            </a>
        </li>
      </ul>
    </section>
  );
}

export default About;