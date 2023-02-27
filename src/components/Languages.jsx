import React from "react";

export default function Languages({languages}) {
  return (
    <div className="languages content">
      <h2 className="Languages-title title">Languages</h2>
      <div className="language-container content">
        {languages?.map((item) => (
          <div className="Languages-item">
            <h3>{item.name}</h3>
            <p>{item.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}