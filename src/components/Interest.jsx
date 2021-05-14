import React from 'react';

const Interest = ({data =[]}) => {
  return (
    <div className="Card">
      <h1 className="Interest-title">Interest</h1>
      <ul className="Interest-list">
        {data.map(interestItem => (
          <li key={data.indexOf(interestItem)} className="Interest-item">
            {interestItem}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Interest;
