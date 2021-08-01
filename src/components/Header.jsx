import React from 'react';
import phone from '../assets/images/phone.png';
import email from '../assets/images/email.png';
import web from '../assets/images/web.png';
import fotoCV from '../assets/images/foto.png'; 

import '../styles/components/Header.styl'; 


function Header({data, children}) {
  
  return( 
    <header>
      <img className="fotoCV" src={fotoCV} alt="photo CV" />
        <section className="Header">
          <h2 className="Header-title">{data.name}</h2>
          <p className="Header-item">{data.profession}</p>
          <div className="PersonalIcon"><img src={phone} alt="phone icon" /><span className="Header-item">{data.phone}</span> </div>
          <div className="PersonalIcon"><img src={email} alt="email icon" /><span className="Header-item">{data.email}</span></div>
          <div className="PersonalIcon"><img src={web} alt="web icon" /><span className="Header-item">{data.website}</span></div>
          <div>
            <span className="Header-item">{data.address}</span>
          </div>
          <h3 className="About-title">About Me</h3>
          {children}
        </section>   
    </header> 
  )
}; 

export default Header; 