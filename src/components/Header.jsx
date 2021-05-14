import React from 'react';

export default props => {
  return (
    <section className="Header">
      <section>
        <figure>
          <img src={props.avatar} alt="This is me!" />
        </figure>
        <div>
          <h1 className="Header-title">{props.name}</h1>
          {props.children}
        </div>
      </section>
    </section>
  );
};
