import React from 'react';
import '../styles/components/Header.styl';

class Header extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <header className='Header-title'>
        { children }
      </header>
    );
  }
}

export default Header;
