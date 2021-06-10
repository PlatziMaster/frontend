import React, {useContext} from 'react';
import { dataContext } from '../containers/App'
import '../styles/components/Profile.styl'

const Profile = () => {

    const { Profile } = useContext(dataContext)
    return(
        <>
            <section className="Profile-container">
                
                <h2 className="Profile-title"> Diseñador Visual, Desarrollador Frontend </h2>
                <p className="Profile-desc"> { Profile }  </p>

            </section>
        </>
    )

}

export default Profile;