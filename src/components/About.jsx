import React, { useContext } from 'react';
import '../styles/components/About.styl';

import AppContext from '../utils/AppContext';

import IconPhone from '../images/icon_phone.png';
import IconMail from '../images/icon_mail.png';
import IconWeb from '../images/icon_website.png';

function About() {
  const state = useContext(AppContext);

  return (
    <div className='About'>
      <h1 className='About-title'>{state.name}</h1>
      <p className='About-job-title'>{state.profession}</p>
      <ul>
        <li className='About-item'>
          <a href={`tel:${state.phone}`}>
            <img src={IconPhone} width='24' title={state.phone} alt='Icon--Phone' />
          </a>
        </li>
        <li className='About-item'>
          <a href={`mailto:${state.email}`}>
            <img src={IconMail} width='24' alt='Icon--Mail' title={state.email} />
          </a>
        </li>
        <li className='About-item'>
          <a href={state.website} target='_blank' rel='noreferrer'>
            <img src={IconWeb} width='24' alt='Icon--Website' title={state.website} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default About;
