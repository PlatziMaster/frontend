import React from 'react';
import '../styles/components/Profile.css';

const Profile = ({ profile }) => (
  <section className="Profile-container">
    <h2 className="Profile-title">Profile</h2>
    <span className="Profile-desc">{profile}</span>
  </section>
);

export default Profile;
