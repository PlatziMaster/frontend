import React from "react";

const Profile = ({ title, profileDsc }) => {
  return (
    <div className="Common-card">
      <h2 className="Profile-title">{title}</h2>
      <p className="Profile-desc">{profileDsc}</p>
    </div>
  );
};

export default Profile;
