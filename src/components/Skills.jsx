import React from 'react';
import { useContext } from 'react'

/** Import Global Context */
import UserInformationContext from '../context/UserInformationContext';
import SkillsItem from './ListItems/SkillsItem';


const Skills = () => {
  const { userInfo } = useContext(UserInformationContext);

  const renderSkillsItem = (info) => {
    return info?.skills.map((data) => (
      <SkillsItem data={data} key={`skills${data.name}`}/>
    ));
  }
  return (
    <>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
          <div className="row">
            <div className='col-md-12'>
              <h1>Habilidades</h1>
            </div>
          </div>
          <div className="row">
          {userInfo ? (renderSkillsItem(userInfo)) : (<h5>Dont have Skills</h5>)}
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
