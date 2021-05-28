import React from "react";
import "../styles/components/App.styl";

const Experience = ({ title, expItems = [{}, {}, {}] }) => {
  return (
    <div className="Common-card">
      <h2 className="Experience-title">{title}</h2>
      <div className="Exp-wrapper">
        {expItems.map((item, index) => {
          return (
            <div key={`Exp-item-${index}`} className="Experience-item">
              <p className="strong">
                {item.company} - {item.jobTitle}
              </p>
              <p>
                <small>
                  ({item.startDate} - {item.endDate})
                </small>
              </p>
              <p>{item.jobDescription}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
