import React from 'react';


function Profile({ data }) {
  return( 
    <React.Fragment>
      <h2 className="Profile-title">Profile</h2>
      <p className="Profile-desc">{data.Profile}</p>
    </React.Fragment>
  )
}; 

export default Profile; 