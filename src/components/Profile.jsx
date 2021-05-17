import React, { useEffect, useState } from 'react'
import '../styles/components/profile.css'
import { getAllData } from '../utils/getData'

const Profile = () => {
    const [profileInfo, setProfileInfo] = useState()
    const {Profile:profile,name} = profileInfo || []
    useEffect(() => {
        getAllData()
          .then(res=> setProfileInfo(res))
    },[])
    return (
        <div className="largue_container">
            <div className="profile_info">
                <h2>{name}</h2>
                <p>{profile}</p>
            </div>            
        </div>
    )
}

export default Profile
