import React from 'react';
import { useContext } from 'react'

/** Import Global Context */
import UserInformationContext from '../context/UserInformationContext';
import LanguagesItem from './ListItems/LanguagesItem';

const Languages = () => {
  const { userInfo } = useContext(UserInformationContext);

  const renderLanguagesItem = (info) => {
    return info?.languages.map((data) => (
      <LanguagesItem data={data} key={`languages${data.name}`}/>
    ));
  }
  return (
    <>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
          <div className="row">
            <div className='col-md-12'>
              <h1>Lenguajes</h1>
            </div>
          </div>
          <div className="row">
          {userInfo ? (renderLanguagesItem(userInfo)) : (<h5>Dont have Languages</h5>)}
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Languages;
