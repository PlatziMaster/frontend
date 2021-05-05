import React from 'react';
import '../styles/components/Languages.scss';

const Languages = ({ children }) => (
  <section className="languages">
    <div className="languages__container">
      {children}
    </div>
  </section>
);

export default Languages;