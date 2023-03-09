import React from 'react';
import { AiFillPhone, AiFillMail, AiFillHome } from 'react-icons/ai';
import '../styles/components/Header.styl';

const About = ({ data }) => {
  return (
    <div className='about-container'>
      <div className='image-container box'>
        <img alt='avatar' src={data.avatar} />
      </div>
      <div className='about-data-container box'>
        <div className='title-section'>
          <div className='title'>{data.name}</div>
        </div>
        <div className='subtitle'>{data.profession}</div>
        <div className='text'>{data.Profile}</div>

        <div className='key-points'>
          <ul className='list'>
            <li>
              <AiFillHome />
              {' '}
              {data.address}
            </li>
            <li>
              <AiFillMail />
              {' '}
              {data.email}
            </li>
            <li>
              <AiFillPhone />
              {' '}
              {data.phone}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
