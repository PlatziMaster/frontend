import React from 'react';

const Profile = ({ description }) => {
  return (
    <section className="Profile Container">
      <h2 className="Profile-title">Description</h2>
      <p className="Profile-desc">{description}</p>
    </section>
  );
};

export default Profile;
