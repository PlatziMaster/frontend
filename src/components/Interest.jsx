import React from 'react';

export default props => {
  return (
    <section className="Interest">
      <h1 className="Interest-title">Interest</h1>
      <section className="items">
        {props.interest?.map(item => {
          return (
            <p className="Interest-item" key={item}>
              {item}
            </p>
          );
        })}
      </section>
    </section>
  );
};
