import React from 'react';
import '../styles/components/Title.styl';

const Title = (props) => (
  <div className="Title">
    <h1>{props.title}</h1>
  </div>
);

export default Title;
