import React, { Component } from 'react';

import './styles/ProfessionalProfile.styl';

class ProfessionalProfile extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <h3 className='professional-profile__subtitle'>
          <span className='professional-profile__line'>Perfil p</span>
          rofesional
        </h3>
        <p className='text'>{data.professionalProfile}</p>
      </div>
    );
  }
}

export default ProfessionalProfile;
