import React from "react";
import "../styles/components/App.styl";

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
