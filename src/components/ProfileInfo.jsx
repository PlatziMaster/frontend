import React from 'react';
import '../styles/components/ProfileInfo.styl';

function ProfileInfo({ children }) {
  return (
    <div className='ProfileInfo'>
      { children }
    </div>
  );
};

export default ProfileInfo;
