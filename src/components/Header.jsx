import React from 'react';

const Header = (props) => {
  return (
    <div className="header-container">
      {props.children}
    </div>
  );
};

export default Header;
