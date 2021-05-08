import React from 'react';
import { useSelector } from 'react-redux';
import ProfilePic from './ProfilePic';

function Header({ children }) {
  const user = useSelector(state => state.user);

  console.log(user);
  return (
    <>
      <div className='header__container'>
        <div className='header-pic'>
          <ProfilePic />
        </div>
        <div className='header-content' />
        {children}
      </div>
    </>
  );
}

export default Header;

