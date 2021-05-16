import React, { useContext } from 'react';
import { appContext } from '../containers/AppContext';
import '../styles/components/Profile.styl';

const Profile = () => {
    const {
      data: {
        dataFromApi: {
          data: { profile },
        },
      },
    } = useContext(appContext);
    
    return (
      <section className="Container Profile Card-glass">
        <h4 className="H4-title">Profile</h4>
        <p className="Profile-p">{profile}</p>
      </section>
    );
}

export default Profile
