import React, { useContext } from 'react';
import '../styles/components/About.styl';

import AppContext from '../utils/AppContext';

function About() {
  const state = useContext(AppContext);

  return (
    <div className='About'>
      <h1 className='About-title'>{state.name}</h1>
      <p className='About-job-title'>{state.profession}</p>
      <ul>
        <li className='About-item'>
          <a href={`tel:${state.phone}`}>
            <img src='https://andresfmj-portfolio-images.s3.amazonaws.com/icon_phone.png' width='24' title={state.phone} alt='Icon--Phone' />
          </a>
        </li>
        <li className='About-item'>
          <a href={`mailto:${state.email}`}>
            <img src='https://andresfmj-portfolio-images.s3.amazonaws.com/icon_mail.png' width='24' alt='Icon--Mail' title={state.email} />
          </a>
        </li>
        <li className='About-item'>
          <a href={state.website} target='_blank' rel='noreferrer'>
            <img src='https://andresfmj-portfolio-images.s3.amazonaws.com/icon_website.png' width='24' alt='Icon--Website' title={state.website} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default About;
