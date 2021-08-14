import React from "react"

import linkedin from "../assets/icons/linkedin.png"
import github from "../assets/icons/github.png"
import email from "../assets/icons/email.png"
import twitter from "../assets/icons/twitter.png"

import "../styles/components/ProfileIntro.css"

const ProfileIntro = () => (
  <section className="profile-intro">
    <article className="profile-intro__user-data">
      <img 
        src="https://static.platzi.com/media/avatars/avatars/irvingjuarez_1649ddef-c66f-44e4-9f92-3d32fa08a901.jpg" 
        alt="Profile avatar" 
        className="avatar"
      />

      <h2>Frontend Engineer</h2>
      <h3>Irving Juárez</h3>
    </article>

    <article className="profile-intro__social-media">
      <div>
        <a href="#">
          <img src={linkedin} alt="linkedin logo" />
        </a>
        <a href="#">
          <img src={github} alt="github logo" />
        </a>
        <a href="#">
          <img src={email} alt="email logo" />
        </a>
        <a href="#">
          <img src={twitter} alt="twitter logo" />
        </a>
      </div>  
    </article>
  </section>
)

export default ProfileIntro