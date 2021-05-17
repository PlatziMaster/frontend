import React from 'react'

const Profile = ({title, profession, profile}) => {
    return (
        <>
            <div className="card mx-3 mt-1 ">
                <div className="card-header bg-info text-white">
                    {title}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{profession}</h5>
                    <p className="card-text">{profile}</p>

                </div>
            </div>            
        </>
    )
}

export default Profile
