import React from 'react';

const Profile = (props) => {
  const { profile } = props;

  return (
    <>
      <section className='Main__profile'>
        <h2 className='Profile-title'>Professional Profile</h2>
        <p className='Profile-desc'>{profile}</p>
      </section>
    </>
  );
};

export default Profile;
