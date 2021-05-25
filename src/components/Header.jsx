import React from 'react';
import '../styles/components/Header.styl'

import avatar from '../assets/static/meGYRR.jpeg'

/**
 * Header component
 * Props:
 * @param {object} personalInfo - Contains this params:
 *  -- @param {string} firstName - First Name of the main CV info
 *  -- @param {string} lastName - Last Name of the main CV info
 *  -- @param {string} phoneNumber - Phone Number of the main CV info
 *  -- @param {string} email - Email of the main CV info
 *  -- @param {string} webSite - URL related with the main CV info
 *  -- @param {string} address - Basic location related with the main CV info
 */
const Header = props => {
  return (
    <header className="container-header">
      <div className="flex-container-header">
        <div className="margin-1">
          <img src={avatar} alt="Avatar" className="avatar-style" />
        </div>
        <div>
          <div className="margin-n-y">
            <h1>{ props.personalInfo?.firstName }</h1>
          </div>
          <div className="margin-n-y">
            <h1>{ props.personalInfo?.lastName }</h1>
          </div>
          <div className="margin-n-y">
            <h2>{ props.personalInfo?.jobTitle }</h2>
          </div>
        </div>
      </div>
      <div className="flex-wrap-container-header margin-1">
        <div className="flex-container margin-n-y-1">
          <span className="material-icons">
            smartphone
          </span>
          <h3>{ props.personalInfo?.phoneNumber }</h3>
        </div>
        <div className="flex-container margin-n-y-1">
          <span className="material-icons">
            mail
          </span>
          <h3>{ props.personalInfo?.email }</h3>
        </div>
        <div className="flex-container margin-n-y-1">
          <span className="material-icons">
            language
          </span>
          <h3>
            <a href={`https://${props.personalInfo?.webSite}`} target="_blank">
              { props.personalInfo?.webSite }
            </a>
          </h3>
        </div>
        <div className="flex-container margin-n-y-1">
          <span className="material-icons">
            location_on
          </span>
          <h3>{ props.personalInfo?.address }</h3>
        </div>
      </div>
    </header>
  );
}

export default Header;
