/* eslint-disable no-else-return */
import React from 'react';

import getData from '../utils/getData';
import '../styles/components/Profile.styl';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    getData('http://localhost:3000/data?q=Profile')
      .then(data => this.setState({ profile: data.Profile, isLoaded: true }))
      .catch(err => console.log(err));
  }

  render() {
    const { profile, isLoaded } = this.state;

    if (isLoaded) {
      return (
        <>
          <div className='Profile-title'>Profile</div>
          <div className='Profile-desc'>{profile}</div>
        </>
      );
    } else {
      return (
        <>
          <div className='Profile-title'>Profile</div>
          <div className='Profile-desc'>Loading...</div>
        </>
      );
    }
  }
}

export default Profile;
