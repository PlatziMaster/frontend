import React from 'react';

function Profile({ data }) {
  return (
    <section className='Profile'>
      <h2 className='Profile-title'>Profile</h2>
      <p className='Profile-desc'>{data.profile}</p>
    </section>
  );
}

export default Profile;
