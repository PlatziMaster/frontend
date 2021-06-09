import React, {useContext} from 'react';
import { dataContext } from '../containers/App'
import '../styles/components/Profile.styl'

const Profile = (props) => {

    const { Profile } = useContext(dataContext)
    return(
        <>
            <h2 className="Profile-title"> Diseñador Visual, Desarrollador Frontend </h2>
            <p className="Profile-desc"> { Profile }  </p>
        </>
    )

}

export default Profile;