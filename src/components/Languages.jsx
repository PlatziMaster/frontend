import React from 'react'
import '../styles/components/Languajes.css'


const Languages = ({ languages }) => {
  return (
    <section className="languages">
      <div >
        <h2 className="title-main">Languages</h2>
        <ul className="languages__content">
          {
            languages.map(lang => (
              <li key={lang.name} className="languages-item">
                <h3 className="title-second">{lang.name}</h3>
                <p className="p-1">{lang.percentage}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Languages