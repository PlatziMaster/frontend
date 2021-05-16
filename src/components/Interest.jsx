import React from 'react';

const Interest = ({ interests }) => {
  return (
    <section className="Interest">
      <h2 className="Interest-title">Interests</h2>
      <ul className="Interest-items">
        {interests.map((item, i) => <li key={i} className="Interest-item">{item}</li>)}
      </ul>
    </section>
  )
}

export default Interest;
