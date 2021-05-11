import React from 'react';
import PropTypes from 'prop-types';
/*import profile from '../assets/images/profile.jpg';*/
import '../styles/components/About.css';

const About = ({ name, profession, phone, email, website, address, avatar }) => (
  <div className='about'>
    <img className='img-profile' src={avatar} alt='Gaby Di Grazia' />
    <div className='personal-information'>
      <h3 className='about-title'>{name}</h3>
      <h1>{profession}</h1>
      <div className='contact-information'>
        <div>
          <h5>{phone}</h5>
          <h5>{email}</h5>
        </div>
        <a href={website} target='_blank' rel='noreferrer'>{website}</a>
      </div>
      <h5>{address}</h5>
    </div>
  </div>
);

About.propTypes = {
  name: PropTypes.string,
  profession: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  website: PropTypes.string,
  address: PropTypes.string,
  avatar: PropTypes.string,
};

export default About;
