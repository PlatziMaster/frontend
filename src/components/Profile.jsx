import React from 'react'

const Profile = ({ profile }) => {
    let {Profile: desc} = profile
    
    return (
        <section className="Profile">
            <h1 className="Profile-title">About me:</h1>
            <p className="Profile-desc"> {desc} </p>
        </section>
    )
}

export default Profile