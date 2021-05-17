import React from 'react'
import About from './About'

const Header = ({title,name,phone,avatar,profession,email,website,address}) => {
    return (
        <>
            <div className="card mx-3 mt-3">
                <div className="card-header bg-info text-white">
                    {title}
                </div>
                <div className="card-body">
                    <About
                    name={name}
                    phone={phone}
                    avatar={avatar}
                    profession={profession}
                    email={email}
                    website={website}
                    address={address}
                    >                        
                    </About>
                </div>
            </div>
        </>
    )
}

export default Header
