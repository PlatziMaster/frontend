import React from 'react';
import '../styles/components/Academic.scss';

const Academic = ({ children }) => (
  <section className="academic">
    <div className="academic__container">
      {children}
    </div>
  </section>
);

export default Academic;