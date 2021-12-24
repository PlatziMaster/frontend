import React from "react";

const Main = ({ children }) => {
  return (
    <div className="main-container">
      <div className="main-cards_container">{children}</div>
    </div>
  );
};

export default Main;
