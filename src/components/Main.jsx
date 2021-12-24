import React from "react";

const Main = function ({ children }) {
  return (
    <div className="main-container">
      <div className="main-cards_container">{children}</div>
    </div>
  );
};

export default Main;
