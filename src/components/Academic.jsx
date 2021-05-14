import React from 'react';

export default props => {
  return (
    <section className="Academic">
      <h1 className="Academic-title">Academic</h1>
      {props.academic?.map(item => {
        return (
          <section className="Academic-item" key={item.degree}>
            <h2>{item.degree}</h2>
            <p>{item.description}</p>
            <p>
              {item.startDate} - {item.endDate} ({item.institution})
            </p>
          </section>
        );
      })}
    </section>
  );
};
