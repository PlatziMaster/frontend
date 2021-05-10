import React from 'react';

import '../styles/components/About.css';

const About = ({ data }) => {

  const {
    name,
    address,
    email,
    phone,
    website,
    profession,
  } = data || [];

  return (
    <div className='About-title'>
      <h1>{name}</h1>
      <div className='About-item'>{profession}</div>
      <div className='About-item'>{`Cel: ${phone} `}</div>
      <div className='About-item'>{`Adress: ${address} `}</div>
      <div className='About-item'>{`Email: ${email} `}</div>
      <div className='About-item'>{`WebSite: ${website} `}</div>
    </div>
  );
};

export default About;
