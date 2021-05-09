import React from 'react';
import { useContext } from 'react'

/** Import Global Context */
import UserInformationContext from '../context/UserInformationContext';


const About = () => {
  const { userInfo } = useContext(UserInformationContext);
  return (
    <>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <h6>{userInfo ? userInfo.profession : `Dont have Profession`}</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <h6>{userInfo ? userInfo.phone : `Dont have Profession`}</h6>
          </div>
          <div className="col-md-4">
            <h6>{userInfo ? userInfo.email : `Dont have email`}</h6>
          </div>
          <div className="col-md-5">
            <h6>{userInfo ? userInfo.website : `Dont have website`}</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h6>{userInfo ? userInfo.address : `Dont have address`}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
