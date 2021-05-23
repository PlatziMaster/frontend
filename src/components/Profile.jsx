import React from 'react';
import '../styles/components/Profile.styl'


const Profile = ({ profile, profilefl, children }) => {
  return (
    <div className='profile__container'>
        <h1 className='profile__title'>Profile</h1>
        <p className='profile__description' id='firstline'>{profilefl}</p>
        <p className='profile__description'>{profile}</p>
      {children}
    </div>
  )
}

export default Profile