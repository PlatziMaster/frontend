import React from "react"

import "../styles/components/Header.css"

import hambBtn from "../assets/icons/hamburgerButton.svg"
import closeBtn from "../assets/icons/close.svg"

const Header = () => {
  return(
    <header>
      <img src={hambBtn} alt="Hamburger button" className="hambBtn"/>

      <nav>
        <div className="nav-header">
          <img src={closeBtn} alt="Close button" />
        </div>
        <ul>
          <li>Home</li>
          <li>Education</li>
          <li>Hobbies</li>
          <li>Additional info</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header