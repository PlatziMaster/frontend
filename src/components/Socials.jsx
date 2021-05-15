import React from 'react';
import '../styles/components/Socials.styl';

const Socials = (props) => {
  const data = props.socials.social;
  return (
    <div className="Social">
      {data.map((social, index) => {
        return (
          <a className="Social-item" href={social.url} title={social.name} key={index} target="_blank">
            <img src={social.image} />
          </a>
        );
      })}
    </div>
  );
}

export default Socials;