import React from 'react';
import '../styles/components/Profile.scss';

const Profile = ({ children }) => (
  <section className="profile">
    <div className="profile__container">
      {children}
    </div>
  </section>
);

export default Profile;