import React from 'react';

const Profile = ({ profile }) => {
  return (
    <section>
      <div className=" profile container__section">
        <h2 className="title-main">Profile</h2>
        <p className="p-1">{profile}</p>
      </div>
    </section>
  )
}

export default Profile