import React from 'react'
import '../styles/components/Header.css'
import Social from '../components/Social'

const Header = ({name, profession, address, email, phone, avatar, social,website}) => {
    
    const [addressName, addressIcon] = address
    const [phoneName, phoneIcon ] = phone
    const [emailName, emailIcon] = email
    
    return(
        <header className="header_container">
            <figure className="header-avatar-container">
                <img className="header-avatar" src={avatar} alt="avatar"/>
            </figure>

            <div className="header_container-info">
                <h1 className='Header-title'> {name} </h1>
                <p className='Header-job-title'>{profession}</p>

                <div className="header_container_contact">
                    <ul className='header-comunication'>
                        <li className='header_icon'>
                            <img src={phoneIcon} alt="Phone Icon"/>
                            <span className='Header-phone'>{phoneName}</span>
                        </li>
                        <li className='header_icon'>
                            <img src={emailIcon} alt="Email Icon"/>
                            <span className='Header-email'>{emailName}</span>
                        </li>
                    </ul>
                    <ul className='header-web'>
                        {
                            social.map((item,index) => 
                                    <Social key={index} 
                                            webicon={website} 
                                            social={item.name} 
                                            website={item.url}/>
                                    ) 
                        }
                    </ul>
                </div>
                <p className='header_icon'>
                    <img src={addressIcon} alt="Contactt Icon"/>
                    <span className='Header-adress' >{addressName}</span>
                </p>
            </div>
        </header>
    )
}

export default Header