import React, { useEffect } from 'react'
import { useContext } from 'react'

/** Import Global Context */
import UserInformationContext from '../context/UserInformationContext';
import ExperienceItem from './ListItems/ExperienceItem';


const Experience = () => {
  const { userInfo } = useContext(UserInformationContext);
    
    const renderExperienceItem = (info) => {
      return info?.experience.map((data) => (
        <ExperienceItem data={data} key={`company${data.company}`}/>
      ));
    }

    return(
        <>
        <div className="card">
        <div className="card-body">
        <div className="row">
            <div className='col-md-12'>
              <h1>Experiencia Laboral</h1>
            </div>
          </div>
          <div className="row">
              {userInfo ? (renderExperienceItem(userInfo)) : (<h5>Dont have Experience</h5>)}
          </div>
        </div>
      </div>
        </>
    )
}

export default Experience