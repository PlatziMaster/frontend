import React from 'react';

const About = ({ social = [], address = '', email = '', phone = '' }) => {
  return (
    <div className='section two-cols'>
      <div className='title-section'>
        <h2 className='About-title'>Acerca de</h2>
      </div>
      <div className='desc-section'>
        <p>{address}</p>
        <p>{email}</p>
        <p>{phone}</p>

        {social.map((item) => {
          return (
            <div key={item.url}>
              <p>
                <span className='social'>{item.name}</span>
                <a href={item.url}>{item.url}</a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
