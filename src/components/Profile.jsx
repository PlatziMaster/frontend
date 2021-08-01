import React from 'react';
import '../styles/components/Profile.styl'


function Profile({ data }) {
  return( 
    <section className="Profile">
      <h2 className="Profile-title">Profile</h2>
      <p className="Profile-desc">{data.Profile}</p>
    </section>
  )
}; 

export default Profile; 