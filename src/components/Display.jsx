import React from 'react';

const Display = ({display}) => {
  return (
            <section className="display">
                    <img src={display.avatar} className="display--image"></img>
                    <h1 className="display--title">{display.firstname}<br /> <span className="display--lastname">{display.lastname}</span> </h1>
                    <h3 className="display--subtitle">{display.profession}</h3>
            </section>
  );
};

export default Display;