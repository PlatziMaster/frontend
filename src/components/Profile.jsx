import React from 'react'
import '../styles/components/Profile.css'

const Profile = ({Profile}) => {
    return(
        <section className='main_profile'>
            <h2 className='Profile-title'>Profile</h2>
            <p className='Profile-desc'>{Profile}</p>
        </section>
    )
}

export default Profile