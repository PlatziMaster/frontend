import React from 'react';
import '../styles/components/Profile.scss';

const Profile = ({ title, children }) => (
  <section className={title.toLowerCase()}>
    {/* <p className= {title.toLowerCase()+"__container-title"}>{title}</p> */}
    <div className={title.toLowerCase()+"__container"}>
      {children}
    </div>
  </section>
);

export default Profile;