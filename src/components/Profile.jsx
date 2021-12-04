import React from 'react';
import '../styles/components/Profile.styl';
import Title from './Title';

const Profile = ({ data }) => (
  <div className="Profile">
    <div className="Profile-title">
      <Title title="Profile" />
    </div>
    <div className="Profile-desc">
      <p>{data.profile}</p>
    </div>
  </div>
);

export default Profile;
