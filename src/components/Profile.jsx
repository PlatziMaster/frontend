import React from 'react';
import { useContext } from 'react'

/** Import Global Context */
import UserInformationContext from '../context/UserInformationContext';

const Profile = () => {
  const { userInfo } = useContext(UserInformationContext);
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className='col-md-12'>
              <h1>Perfil</h1>
            </div>
          </div>
          <div className="row">
            <div className='col-md-12'>
              <div className='card'>
                <div className='card-body'>
                <h6 style={{textAlign:'justify'}}>{userInfo ? userInfo.Profile : 'Dont have description' }</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
