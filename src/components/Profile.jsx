import React from 'react';

const Profile = ({ title, description }) => {
  return (
    <section className='Profile'>
      <h2 className='Profile-title'>{title}</h2>
      <div className='Profile-desc'>{description}</div>
    </section>
  );
};

export default Profile;
