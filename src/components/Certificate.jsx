import React from 'react';
import '../styles/components/Certificate.styl'

const Certificate = ({ certificate }) => {
  return (
    <div className='certificate'>
      <h1 className='cetificate-title' >Certificados: </h1>
      {
        certificate.map(certification =>
          <div
            className='certificate-content'
            key={certificate.indexOf(certification)}
          >
            <h3 className='certificate-name'>{certification.name}</h3>
            <div className='certificate-conteiner'>
              <h4 className='certificate-institutio'>{certification.institution}</h4>
              <span span className='certificate-date'>{certification.date}</span>
            </div>
            <p className='certificate-desc'>{certification.description}</p>
          </div>
        )
      }
    </div>
  )
}

export default Certificate
