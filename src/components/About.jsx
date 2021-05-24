import React from 'react';
import '../styles/components/About.styl';

const About = ({
  name,
  profession,
  phone,
  email,
  website,
  address,
  social,
}) => {

  return (
    <div className='header-info'>
      <h1 className='header-title'>{name}</h1>
      <p className='header-job-title'>{profession}</p>
      <span className='header-phone'>Tel: +52 {phone}</span>
      <span className='header-email'>Email: {email}</span>
      <span className='header-website'>
        Sitio Web:
        <a href={website} target='_blank' rel='noreferrer'>{website}</a>
      </span>
      <p className='header-address'>{address}</p>
      <div className='social'>
        {social &&
          social.map((item, index) => {
            const { id } = index;
            return (
              <a key={id} target='_blank' rel='noreferrer' href={item.url}>{item.name}</a>
            );
          })
        }
      </div>
    </div>
  );
};

export default About;
