import React from 'react';

const Academic = ({ academic }) => {
  return (
    <section className="Academic">
      <h2 className="Academic-title">Education</h2>
      <ul className="Academic-items">
        {academic.map((item, i) => {
          return <li key={i} className="Academic-item">{`${item.degree} | ${item.institution} | ${item.startDate} - ${item.endDate}`}</li>
        })}
      </ul>
    </section>
  )
}

export default Academic;
