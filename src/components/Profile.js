import React from 'react';
import '../styles/components/App.styl';

const Profile = ({ data }) => {
  return (
    <section className='description'>
      <h2>Perfil</h2>
      <p>{data.profile}</p>
    </section>
  );
};

export default Profile;
