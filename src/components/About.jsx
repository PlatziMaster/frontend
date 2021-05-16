import React from 'react';

const About = (props) => {
  const { phone, email, website, address, social } = props;

  return (
    <>
      <section className='Header-about'>
        <h3 className='About-title'>Personal Information</h3>
        <div className='About-contact'>
          <div>
            <p>Phone:</p>
            <h4 className='About-item'>{phone}</h4>
          </div>
          <div>
            <p>Email:</p>
            <h4 className='About-item'>{email}</h4>
          </div>
          <div>
            <p>Website:</p>
            <h4 className='About-item'><a href={website}>{website}</a></h4>
          </div>
        </div>
        <div className='About-address'>{address}</div>
      </section>
      <section className='Header-social'>
        {
          social &&
            social.map((element) => {
              const { url } = element;
              return (
                <a href={element.url} key={url} className='social-item'>
                  <img src={element.image} alt={element.name} />
                </a>
              );
            })
        }
      </section>
    </>
  );
};

export default About;
