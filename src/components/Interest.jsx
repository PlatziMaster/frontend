import React from 'react';
import { useContext } from 'react'

/** Import Global Context */
import UserInformationContext from '../context/UserInformationContext';
import InterestItem from './ListItems/InterestItem';

const Interest = () => {
  const { userInfo } = useContext(UserInformationContext);

  const renderInterestItem = (info) => {
    return info?.interest.map((data) => (
      <InterestItem data={data} key={`interest${data}`}/>
    ));
  }
  return (
    <>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
          <div className="row">
            <div className='col-md-12'>
              <h1>Intereses</h1>
            </div>
          </div>
          <div className="row">
          {userInfo ? (renderInterestItem(userInfo)) : (<h5>Dont have Interest</h5>)}
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interest;
