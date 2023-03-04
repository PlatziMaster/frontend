import React from 'react';

export default function Header({ children }) {
  return (
    <header className='header Header-title'>
      <div>
        {children}
      </div>
    </header>
  );
}
