import React from 'react';

export default props => {
  return (
    <section className="Profile">
      <h1 className="Profile-title">Profile</h1>
      <p className="Profile-desc">{props.profile}</p>
    </section>
  );
};
