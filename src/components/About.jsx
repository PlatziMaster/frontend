import React from 'react';

export default props => {
  return (
    <section className="About">
      <p className="About-title">{props.profession}</p>
      <section className="three-cols">
        <p className="About-item">&nbsp;{props.phone}&nbsp;&nbsp;&nbsp;</p>
        <p className="About-item">{props.email}&nbsp;&nbsp;&nbsp;</p>
        <p className="About-item">{props.website}&nbsp;&nbsp;&nbsp;</p>
      </section>
      <p className="About-address">
        <i className="fas fa-map-marker-alt"></i> {props.address}
      </p>
    </section>
  );
};
