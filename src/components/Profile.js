import React from 'react';
import './styles/Profile.styl';

class Profile extends React.Component {
  render() {
    return (
      <div className='Profile'>
        <h1 className='Profile.title'> this is ma Profile</h1>
        <div className='Profile-desc'>this is a description</div>
      </div>

    );
  }

}

export default Profile;

