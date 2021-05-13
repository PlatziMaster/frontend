import React from 'react'
import '../styles/components/Card.styl'

const Card = ({ className, title, children }) => {
  return(
    <div className='Card'>
      <h2>
        { title }
      </h2>
      { children }
    </div>
  )
}

export default Card