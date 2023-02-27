import React from "react";

export default function Profile({ profile}) {
  return (
    <div className="profile content">
      <h2 className="Profile-title title">Profile</h2>
      <p className="Profile-desc content">
        {profile}
      </p>
    </div>
  );
}