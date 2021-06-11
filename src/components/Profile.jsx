import React from 'react';
import '../styles/components/Profile.styl';

const Profile = (data) => {
  const { profile } = data;
  return (
    <section className='Profile-container'>
      <h2 className='Profile-title'>Profile</h2>
      <p className='Profile-description'>
        {profile}
      </p>
    </section>
  );
};

export default Profile;
