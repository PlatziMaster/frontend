import React from 'react'
import '../styles/components/Interest.css'

const Interest = ({ interest }) => {
  return (
    <section className="">
      <div className="interest">
        <h2 className="title-main">Interest</h2>
        {
          interest.map(int => (
            <span key={int} className="interest-item">{int}</span>
          ))
        }
      </div>

    </section>
  )
}

export default Interest