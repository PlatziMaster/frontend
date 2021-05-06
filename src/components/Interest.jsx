import React from 'react';

const Interest = ({ interest = [] }) => {
  return (
    <div className="Interest Container">
      <h2 className="Interest-title">
        <i className="fas fa-clock"></i>
        Interest
      </h2>
      <div className="Interest-content">
        {interest.map((item, id) => (
          <figure key={id} className="Interest-item">
            <img src={`../../public/static/${item}.png`} alt={item} />
            <figcaption>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Interest;
