import React from 'react';
import '../styles/components/Profile.styl';

/**
 * Profile component
 * Props:
 * @param {object} profile - Contains this params:
 *  -- @param {string} title - Title of the Profile
 *  -- @param {string} subtitle - Subtitle of the Profile
 *  -- @param {string} descripition - Description of the Profile
 */
const Profile = props => (
  <div className="container-profile">
    <div className="flex-container">
      <span className="material-icons icon-big">
        account_box
      </span>
      <div className="title margin-y-1">{ props.profile?.title }</div>
    </div>
    <div className="subtitle margin-y-1">{ props.profile?.subtitle }</div>
    <div className="text-info margin-y-1">{ props.profile?.descripition }</div>
  </div>
);

export default Profile;
