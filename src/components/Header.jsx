import React from "react";
import "../styles/components/App.styl";

const Header = ({ children }) => {
  return <div className="Header-title">{children}</div>;
};

export default Header;
