import React, { useEffect, useState } from 'react'
import About from './About';
import { getAllData } from '../utils/getData'
import '../styles/components/header.css'
const Header = () => {
    
    const [headerInfo, setHeaderInfo] = useState()
    const {profession,address,email,website,phone,avatar} = headerInfo || []
    useEffect(() => {
        getAllData()
          .then(res=> setHeaderInfo(res))
    },[])

    return (
        <div className="header_container">
            <img src={avatar} className="header_profile"></img>
            <About 
                Title="Curriculum vitae" 
                Job={profession}
                Phone={phone}
                Email={email}
                Web={website}
                Address={address}
            />
        </div>
    )
}

export default Header

