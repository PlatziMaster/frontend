import React from 'react';
import '../styles/components/InterestCard.styl'

/**
 * InterestCard component
 * Props:
 * @param {string} type - Type or name of the interest (main interest)
 * @param {array} items - List of the specific interest ralated with the main interest
 */
const InterestCard = ({type, items}) => (
  <div className="card-interest">
    <div className="title-card">{type}</div>
    {items?.length > 0 && (
      <ul className="lists margin-y-1">
        {items.map((item, index) =>
          <li key={index}>{item}</li>
        )}
      </ul>
    )}
  </div>
)

export default InterestCard;
