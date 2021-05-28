import React from 'react'
import '../styles/components/Header.css'

const Header = ({ name, profession, website, avatar, address, email, social }) => {
  return (
    <header className="">

      <div className="container header">

        <div className="header__content">
          <h1 className="header-job-title">{profession}</h1>
          <h2 className="header-title">{name}</h2>
          <a className="header-website">{website}</a>
        </div>
        <figure className="img-container">
          <img className="header__img--profile" src={avatar} alt="avatar-user" />
        </figure>

        <div className="info">
          <div className="header-social">
            {
              social.map(soc => (
                <a key={soc.name} className="header-icon" href={soc.url}><i className={soc.icon}></i></a>
              ))
            }
          </div>
          <p className="header-adress"> - {address} - {email}</p>
        </div>
      </div>

    </header>
  )
}

export default Header