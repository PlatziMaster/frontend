import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import '../styles/components/Profile.styl'
 const Profile = () => {
    const {data} = useContext(DataContext)
    return (
        <div className="profile-container">
            <h2>Profile</h2>
           {data.Profile}
        </div>
    )
}   

export default Profile;