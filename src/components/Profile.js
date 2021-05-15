import React from 'react';
import ProfessionalProfile from './ProfessionalProfile';
import Experience from './Experience';
import Academic from './Academic';
import SoftSkills from './SoftSkills';
import Languages from './Languages';

import './styles/Profile.styl';

export default function Profile() {
  return (
    <React.Fragment>
      <div className='profile__container'>
        <h1 className='profile__title'>Brandon Argel</h1>
        <h2 className='profile__subtitle'>Desarrollador Frontend</h2>
        <ProfessionalProfile />
        <Experience />
        <Academic />
        <SoftSkills />
        <Languages />
      </div>
    </React.Fragment>
  );
}
