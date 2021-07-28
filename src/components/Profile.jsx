import React from 'react';
import '../styles/components/Profile.styl';
import Title from './Title';

const Profile = () => (
  <div className="Profile">
    <div className="Profile-title">
      <Title title="Profile" />
    </div>
    <div className="Profile-desc">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates beatae tempora aperiam obcaecati iste, quasi dolore laborum quo doloremque totam nihil? Aspernatur vero provident corrupti eveniet, rerum architecto temporibus harum?</p>
    </div>
  </div>
);

export default Profile;
