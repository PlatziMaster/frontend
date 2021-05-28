import React from "react";
import "../styles/components/App.styl";

const Academic = ({ title, academicItems = [{}, {}, {}] }) => {
  return (
    <div className="Common-card">
      <h2 className="Academic-title">{title}</h2>
      <div>
        {academicItems.map((item, index) => {
          return (
            <div key={`Academic-item-${index}`} className="Academic-item">
              <p className="strong">
                {item.degree} - {item.institution}
              </p>
              <p>
                <small>
                  ({item.startDate} - {item.endDate})
                </small>
              </p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Academic;
