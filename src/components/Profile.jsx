import React from 'react';
import '../styles/components/Profile.styl'


const Profile = ({ profile, children }) => {
  return (
    <section className='profile__container'>
        <h1 className='profile__title'>Perfil Profesional</h1>
        <p className='profile__description'>{profile}</p>
      {children}
    </section>
  )
}

export default Profile
