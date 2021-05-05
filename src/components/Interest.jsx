import React from 'react';
import '../styles/components/Interest.scss';

const Interest = ({ children }) => (
  <section className="interest">
    <div className="interest__container">
      {children}
    </div>
  </section>
);

export default Interest;