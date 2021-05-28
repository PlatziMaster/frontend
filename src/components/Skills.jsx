import React from "react";
import "../styles/components/App.styl";

const Skills = ({ title, skillsItems = [{}, {}, {}] }) => {
  return (
    <div className="Common-card">
      <h2 className="Skills-title">{title}</h2>
      <div className="Common-wrapper">
        {skillsItems.map((item, index) => {
          return (
            <div key={`Skills-item-${index}`} className="Skills-item">
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

export default Skills;
