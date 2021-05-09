import React from 'react';
import { useContext } from 'react'


/** Import Global Context */
import UserInformationContext from '../context/UserInformationContext';
import AcademicItem from './ListItems/AcademicItem';



const Academic = () => {
  const { userInfo } = useContext(UserInformationContext);

  const renderAcademicItem = (info) => {
    return info?.Academic.map((data) => (
      <AcademicItem data={data} key={`academic${data.degree}`}/>
    ));
  }

  return (
    <>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
          <div className="row">
            <div className='col-md-12'>
              <h1>Estudios</h1>
            </div>
          </div>
          <div className="row">
            {userInfo ? (renderAcademicItem(userInfo)) : (<h5>Dont have Academic Experience</h5>)}
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Academic;
