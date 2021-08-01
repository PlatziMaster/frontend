import React from 'react';

import '../styles/components/Languages.styl'

function Languages({name, percentage}) {
  return( 
    <div className="LanguagesContainer">
        <h4 className="Languages-title">{name}</h4>
        <li className="Languages-item">{percentage}</li>
        <span>
          <div className="LanguageBarG">
            <div className="LanguageBar"></div>
          </div>
        </span>  
    </div>
  )
}; 

export default Languages; 