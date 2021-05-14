import React from 'react';

export default props => {
  return (
    <section className="Languages">
      <h1 className="Languages-title">Languages</h1>
      <section className="items">
        {props.languages?.map(item => {
          return (
            <p className="Languages-item" key={item.name}>
              {item.name} {item.percentage}
            </p>
          );
        })}
      </section>
    </section>
  );
};
