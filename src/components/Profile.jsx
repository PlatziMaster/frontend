import React from 'react';
import '../styles/components/Profile.styl'


const Profile = ({ profile, children }) => {
  return (
    <section className='profile'>
      <div className='profile-content'>
        <h1 className='profile-title'>Perfil:</h1>
        <p className='profile-desc'>{profile}</p>
      </div>
      {children}
    </section>
  )
}

export default Profile
