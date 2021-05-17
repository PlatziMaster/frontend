/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-array-index-key */
import React from "react";

const Languages = ({ title, languagesItems = [{}, {}, {}] }) => {
  return (
    <div className="Common-card">
      <h2 className="Languages-title">{title}</h2>
      <div className="Common-wrapper">
        {languagesItems.map((item, index) => {
          return (
            <div key={`Languages-item-${index}`} className="Languages-item">
              <p className="strong">
                {item.name} : <small>({item.percentage})</small>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Languages;
