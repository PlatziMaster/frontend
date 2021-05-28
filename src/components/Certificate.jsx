import React from 'react'
import '../styles/components/certificate.css'


const Certificate = ({ certificate }) => {
  return (
    <section>
      <div className="">
        <h2 className="title-main">Certificate</h2>
        <ol>
          {
            certificate.map(cert => (
              <li key={cert.name} className="certificate">
                <h3 className="title-second">{cert.name}</h3>
                <p className="p-1">{cert.institution} - {cert.date}</p>
              </li>
            ))
          }
        </ol>
      </div>
    </section>
  )
}

export default Certificate