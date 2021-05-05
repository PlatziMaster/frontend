import React from 'react';
import '../styles/components/ProfileItem.scss';

const ProfileItem = () => (
  <div className="profile-item">
  <div className="profile-item__details">
    <p className="profile-item__details--title">Título descriptivo</p>
    <ul>
        <li><a href="/">CItem1</a></li>
        <li><a href="/">item2</a></li>
      </ul>
  </div>
</div>
);

export default ProfileItem;