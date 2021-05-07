import React from 'react';
import '../styles/components/ProfileItem.scss';

const ProfileItem = (data) => (
  
  <div className="profile-item">
    <div className="profile-item__details">
      <p className="profile-item__details--title">{data.title}</p>
      {data.onlyDesc &&
        <p>{data.descr}</p>
        
      }
      {!data.onlyDesc &&
      <ul className="profile-item__details--list">
        {
          
          data.interest!=undefined?data.interest.map(item => 
          <li key={data.interest.indexOf(item)}>{item}</li>
          ):''
        }
      </ul>
      }
    </div>
  </div>
);

export default ProfileItem;