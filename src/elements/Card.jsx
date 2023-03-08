import React from 'react';

const Card = ({ title, columns = 1 }) => {
  return (
    <div className="card-container">
      <div className="title">Title</div>
      <div className="items-section">
        <div className={`col-${columns * 4}`}>Data</div>
      </div>
    </div>
  );
};

export default Card;
