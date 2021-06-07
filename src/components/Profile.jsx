import React from 'react';
import '../styles/components/global.styl';

function Profile({ body, profession }) {
  return (
    <div className="grid">
      <div className="profile">
        <h2 className="text title">{profession}</h2>
        <p className="item parraph">{body}</p>
      </div>
    </div>
  );
}
export default Profile;
