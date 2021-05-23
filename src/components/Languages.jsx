import React from 'react';
import '../styles/components/Languages.styl'

const Languages = ({ languages }) => {
  return (
    <div className='languages__container'>
      <h2 className='languages__title'>Languages:</h2>
      {
        languages.map( language =>
        <div className='languages__listContainer'>
          {language.name}
          <div
            className='languages__item'
            key={languages.indexOf(language)}
          >
            <div className="languages__progressbar" style={{width:language.percentage}}>{language.percentage}</div>
          </div>
        </div>
        )
      }
    </div>
    
  )
}

export default Languages 