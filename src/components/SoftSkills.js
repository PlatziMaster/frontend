import React, { Component } from 'react';

class SoftSkills extends Component {
  render() {
    const data = this.props.data.softSkills;

    return (
      <React.Fragment>
        <h3 className='professional-profile__subtitle'>Habilidades Blandas</h3>
        <ul>
          <li className='soft__skills'>{data[0]}</li>
          <li className='soft__skills'>{data[1]}</li>
          <li className='soft__skills'>{data[2]}</li>
          <li className='soft__skills'>{data[3]}</li>
          <li className='soft__skills'>{data[4]}</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default SoftSkills;
