import React from 'react';
import '../styles/components/Profile.styl';

/*Componente que muestra el perfil*/

const Profile = ({ Profile }) => {
  return (
    <section className='Profile card'>
      <h2 className='Profile-title'>Profile</h2>
      <p className='Profile-text'>{Profile || 'Description'}</p>
    </section>
  );
};

export default Profile;
