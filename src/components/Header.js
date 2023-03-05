import React from 'react';

const Header = ({ userData }) => {
  return (
    <div>
      <div className='Header-image'>
        <img src={userData.avatar} alt={userData.name} />
      </div>
      <div className='Header-title'>
        <h1>{userData.name}</h1>
      </div>
      <div className='Header-jobtitle'>
        {userData.profession}
      </div>
      <div className='Header-infouser'>
        <span>{userData.phone}</span>
        <span>{userData.email}</span>
        <span>{userData.website}</span>
      </div>
      <div className='Header-address'>
        <span>{userData.address}</span>
      </div>
    </div>
  );
};

export default Header;
