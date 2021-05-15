import React from 'react';
import '../styles/components/About.css';

const About = ({ info }) => {
  return (
    <div className='about'>
      <h1 className='About-title'>More About me:</h1>
      <ul className='about-item-list'>
        {
          info.map(item => (
            <li key={item.date} className='About-item'>
              <p>
                <b>Course: </b>
                {item.name}
              </p>
              <p>
                <b>Description: </b>
                {item.description}
              </p>
              <p>
                <b>Institution: </b>
                {item.institution}
              </p>
              <p>
                <b>Date: </b>
                {item.date}
              </p>

              <span>
                <b>Profile: </b>
                <a href={item.profile}>{item.profile}</a>
              </span>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default About;
