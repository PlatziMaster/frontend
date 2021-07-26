import React from 'react';
import '../styles/components/Profile.styl';
import Title from './Title';

const Profile = () => (
  <div className="Profile">
    <div className="Profile-title">
      <Title title="Profile" />
    </div>
    <div className="Profile-desc">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam inventore totam minima nobis explicabo aliquam eum, earum quibusdam. Ipsa nemo dolores ratione recusandae minima atque facilis alias temporibus natus omnis!</p>
    </div>
  </div>
);

export default Profile;
