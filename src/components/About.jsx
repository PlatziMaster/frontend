import React, { useContext } from 'react';
import { appContext } from '../containers/AppContext';
import '../styles/components/About.styl';

const About = () => {
  const {
    data: {
      dataFromApi: {
        data: {
          avatar,
          name,
          profession,
          phone,
          email,
          website,
          address,
          social,
        },
      },
    },
  } = useContext(appContext);

  return (
    <section className="Header-section Container">
      <img className="Header-img" src={avatar} alt="José Guerrero" />
      <div className="Header-divWrapper">
        <h1 className="Header-title">{name}</h1>
        <p className="Header-job-title">
          {profession}
        </p>
        <a href={'mailto:' + email} className="Header-email">
          <i className="bx bx-mail-send"></i>
          {email}
        </a>
        <div className="Header-DivInfo">
          <p className="Header-phone">
            <i className="bx bxs-phone-outgoing"></i>
            {phone}
          </p>
          <a
            href={website}
            rel="noopener"
            target="_blank"
            className="Header-website"
          >
            <i className="bx bx-palette"></i>
            Portafolio
          </a>
          <p className="Header-adress">
            <i className="bx bx-map"></i>
            {address}
          </p>
        </div>
      </div>
      <div className="Div-aboutMedia">
        {social.map(({ name, url }) => (
          <a
            key={name}
            href={url}
            rel="noopener"
            target="_blank"
            className="Header-website"
          >
            <i className={'bx bxl-' + name.toLowerCase()}></i>
          </a>
        ))}
      </div>
    </section>
  );
};

export default About;
