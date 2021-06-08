import React from 'react';
import '../styles/components/Loading.styl';

const Loading = () => {
  return (
    <div className="Div-loading">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h4>Loading...</h4>
    </div>
  );
};

export default Loading;
