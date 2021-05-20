import React, { Component } from 'react';

import ProfessionalProfile from './ProfessionalProfile';
import Experience from './Experience';
import Academic from './Academic';
import SoftSkills from './SoftSkills';
import Languages from './Languages';

import './styles/Profile.styl';

class Profile extends Component {
  render() {
    const data = this.props.data.profile;

    return (
      <React.Fragment>
        <div className='profile__container'>
          <h1 className='profile__title'>{data.name}</h1>
          <h2 className='profile__subtitle'>{data.profession}</h2>
          <ProfessionalProfile className='profile-description' data={data} />
          <Experience data={data} />
          <Academic data={data} />
          <SoftSkills data={data} />
          <Languages data={data} />
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
