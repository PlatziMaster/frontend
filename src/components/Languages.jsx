import React from 'react';
import '../styles/components/Languages.styl'

const Languages = ({ languages }) => {
  return (
    <div className='languages'>
      <h2 className='languages-title'>Idiomas:</h2>
      {
        languages.map( language =>
        <div
          className='languages-item'
          key={languages.indexOf(language)}
        >
          <strong>{language.name}{": "}</strong>{language.level}
        </div>
        )
      }
    </div>
  )
}

export default Languages