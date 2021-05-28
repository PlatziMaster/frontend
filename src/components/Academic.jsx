import React from 'react'
import '../styles/components/Academic.css'

const Academic = ({ academic }) => {
  return (
    <section className="academic">
      <div className="">
        <h2 className="title-main">Academic</h2>
        <ul className="academic__content">
          {
            academic.map(aca => (
              <li className="degree" key={aca.degree}>
                <h3 className="title-second">{aca.degree}</h3>
                <p className="p-1">{aca.institution} | {aca.startDate} - {aca.endDate}</p>
                <p className="p-1">{aca.description}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Academic