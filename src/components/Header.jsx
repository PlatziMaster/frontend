import React from 'react';
import '../styles/components/Header.styl';

const Header = (props) => {

  return (
    <div className="container container--full Header">
      {props.children}
    </div>
  );
}

export default Header;