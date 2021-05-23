import React from 'react';
import '../styles/components/Academic.styl'

const Academic = ({ academic }) => {
  return (
    <div className='academic__container'>
      <h2 className='Academic-title'>Education</h2>
      {
        academic && academic.map( item =>
          <div className='Academic-item' key={academic.indexOf(item)}>
            <h3 className='academic__degree'>{item.degree}</h3>
              <h4 className='academic__institution'>{item.institution}</h4>
              <div className="academic__date">
                <span>{item.startDate}</span>
                <span> - {item.endDate}</span>
              </div>
            <p className="academic__description">{item.description}</p>
          </div>
        )
      }
      <div className='Academic-item' />
      <div className='Academic-item' />
      <div className='Academic-item' />
    </div>
  )
}

export default Academic 