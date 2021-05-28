import React from "react";
import "../styles/components/App.styl";

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
