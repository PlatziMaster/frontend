import React from "react"

import "../styles/components/Header.css"

import hambBtn from "../assets/icons/hamburgerButton.svg"
import closeBtn from "../assets/icons/close.svg"

class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      openNavbar: false
    }

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClosing = this.handleClosing.bind(this);
  }

  handleOpen(){
    this.setState({
      openNavbar: true
    })
  }

  handleClosing(){
    this.setState({
      openNavbar: false
    })
  }

  displayBtn(){
    if(!this.state.openNavbar){
      return(
        <img src={hambBtn} alt="Hamburger button" className="hambBtn" onClick={this.handleOpen}/>
      )
    }else{
      return(
        <div></div>
      )
    }
  }

  displayNavbar(){
    let nameClass

    if(this.state.openNavbar){
      nameClass = "display"
    }else{
      nameClass = ""
    }

    return(
      <nav className={nameClass}>
        <div className="nav-header">
          <img src={closeBtn} alt="Close button" onClick={this.handleClosing}/>
        </div>
        <ul>
          <li>Home</li>
          <li>Education</li>
          <li>Hobbies</li>
          <li>Additional info</li>
        </ul>
      </nav>
    )
  }

  render(){
    return(
      <header>
        {this.displayBtn()}

        {this.displayNavbar()}
      </header>
    )
  }
}

export default Header