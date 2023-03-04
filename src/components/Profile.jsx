import React from 'react';
import '../styles/components/Profile.css';

function Profile({ description, title }) {
  return (
    <div className='profile'>
      <h3 className='profile-title'>{title}</h3>
      <div className='profile-description'>
        <p className='Profile-desc'>
          {description}
        </p>
      </div>
    </div>
  );
}

export default Profile;
