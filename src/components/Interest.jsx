/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-array-index-key */
import React from "react";

const Interest = ({ title, interestItems = ["", "", ""] }) => {
  return (
    <div className="Common-card">
      <h2 className="Interest-title">{title}</h2>
      <div className="Common-wrapper">
        {interestItems.map((item, index) => {
          return (
            <div key={`Interest-item-${index}`} className="Interest-item">
              <p className="strong">{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Interest;
