import React from 'react';
import '../styles/components/Profile.styl'


const Profile = ({ profile, profilefl, children }) => {
  return (
    <div className='profile__container'>
        <h1 className='Profile-title'>Profile</h1>
        <p className='profile__description-fl' id='firstline'>{profilefl}</p>
        <p className='Profile-desc'>{profile}</p>
      {children}
    </div>
  )
}

export default Profile