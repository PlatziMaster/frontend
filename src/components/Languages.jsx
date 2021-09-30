/* eslint-disable jsx-quotes */
import React from 'react';
import '../styles/components/App.styl';

function Languages({ languages }) {
  return (
    <div className="category-container">
      <h2>Languages</h2>
      {languages?.map(item => (
        <>
          <h3>{item.name}</h3>
          <h4>{item.percentage}</h4>
        </>
      ))}
    </div>
  );
}

export default Languages;
