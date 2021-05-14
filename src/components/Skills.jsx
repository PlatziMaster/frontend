import React from 'react';

export default props => {
  return (
    <section className="Skills">
      <h1 className="Skills-title">Skills</h1>
      {props.skills?.map(item => {
        return (
          <p className="Skills-item" key={item.name}>
            {item.name} {item.percentage}
          </p>
        );
      })}
    </section>
  );
};
