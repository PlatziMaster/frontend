import React from 'react';
import '../styles/components/Profile.styl';

const Profile = (props) => {
  const {profession, profile } = props.information;
  return (
    <div className="card profile">
      <div>
        <h2>{profession? profession : ''}</h2>
        <h3>{profile}</h3>
      </div>
    </div>
  );
}

export default Profile;
