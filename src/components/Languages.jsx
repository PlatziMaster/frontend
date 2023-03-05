import React from 'react';
import '../styles/components/Language.styl';

const LanguagesItem = ({ name, percentage }) => {
  return (
    <div className="lang-box">
      <p>{name}</p>
      <p>{percentage}</p>
    </div>
  );
};

const Languages = ({ languages }) => {
  return (
    <div className="wrapper">
      <h3>Languages</h3>
      <div className="lang-wrapper">
        {languages &&
          languages.map((sk, i) => (
            <LanguagesItem key={`${Math.random(i)}`} {...sk} />
          ))}
      </div>
    </div>
  );
};

export default Languages;
