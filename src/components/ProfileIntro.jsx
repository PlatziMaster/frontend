import React from "react"

import linkedin from "../assets/icons/linkedin.png"
import github from "../assets/icons/github.png"
import email from "../assets/icons/email.png"
import twitter from "../assets/icons/twitter.png"

import "../styles/components/ProfileIntro.css"

const ProfileIntro = (props) => {
  const { img, jobTitle, name, links } = props.info
  return(
    <section className="profile-intro">
      <article className="profile-intro__user-data">
        <img 
          src={img}
          alt="Profile avatar" 
          className="avatar"
        />

        <h2>{jobTitle}</h2>
        <h3>{name}</h3>
      </article>

      <article className="profile-intro__social-media">
        <div>
          <a href={links.linkedin}>
            <img src={linkedin} alt="linkedin logo" />
          </a>
          <a href={links.github}>
            <img src={github} alt="github logo" />
          </a>
          <a href={`emailto: ${links.email}`}>
            <img src={email} alt="email logo" />
          </a>
          <a href={links.twitter}>
            <img src={twitter} alt="twitter logo" />
          </a>
        </div>  
      </article>
    </section>
  )
}

export default ProfileIntro