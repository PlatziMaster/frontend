import React from 'react';

const Interests = ({ data }) => {
  const interest = Object.values(data);
  return (
    <div>
      <h2>Intereses</h2>
      <ul>
        {interest.map(interest => (
          <li>{interest}</li>
        ))}
      </ul>
    </div>
  );
};

export default Interests;
