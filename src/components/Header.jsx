import React from 'react';
import { useContext, useEffect } from 'react'

/** Import Global Context */
import UserInformationContext from '../context/UserInformationContext';

import '../styles/components/Header.css';

const Header = ({ children }) => {
  const { userInfo, getUserInfo } = useContext(UserInformationContext);
  useEffect(() => {
    getUserInfo();
  }, [])
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <img
                src='https://arepa.s3.amazonaws.com/melissa.jpg'
                className="avatarUser rounded-circle"
                alt="..."
              />
            </div>
            <div className="col-md-9">
              <div className='row'>
                <div className='col-md-12'>
                <h1>{userInfo ? userInfo.name : 'Dont have Name' }</h1>
                </div>
              </div>
              <div className='row'>
              {children}          
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
