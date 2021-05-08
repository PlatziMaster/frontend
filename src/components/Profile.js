import React from 'react';

function Profile({ children }) {
  return (
    <>
      <section className='header__section-container'>
        <h1>Profile Title</h1>
        <div className='header-adress'>Profile Descrip</div>
        {children}
      </section>
    </>
  );
}

export default Profile;
