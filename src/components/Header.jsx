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
        <section className="HeaderItem">
          <h2 className="Header-title">{data.name}</h2>
          <span className="Header-item">{data.profession}</span>
          <div className="HeaderItemRow">
            <img src={phone} alt="phone icon" /><span className="Header-item">{data.phone}</span>
            <img src={email} alt="email icon" /><span className="Header-item">{data.email}</span>
            <img src={web} alt="web icon" /><span className="Header-item">{data.website}</span>
          </div>
          <div className="headerItemRow">
            <span className="Header-item">{data.address}</span>
          </div>
          {children}
        </section>   
    </header> 
  )
}; 

export default Header; 