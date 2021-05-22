import React from 'react';
import '../styles/components/Header.styl';


const Header = ({
  name,
  profession,
  address,
  email,
  avatar,
  social,
  profile,
}) => {
  return (
    <div className="columns pt-3">
      <div className="column">
        <div className="box">
          <div className="media">
            <div className="media-left">
              <div className="columns">
                <div className="column">
                  <img src={avatar} className="is-rounded" />
                </div>
              </div>
            </div>
            <div className="media-content">
              <div className="content">
                <div className="information">
                  <h1>
                    I'm <strong className="name">{name}</strong>
                  </h1>
                  <p className="subtitle is-5">{profession}</p>
                </div>
                <div className="columns">
                  <div className="column">
                    <div className="information">
                      <strong>
                        <h1 className="title is-4 mt-2">Profile</h1>
                      </strong>
                      <p>{profile}</p>
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <i className="fas fa-envelope mr-3"></i>{' '}
                    <strong>{email}</strong>
                  </div>
                  <div className="column">
                    <i className="fas fa-map-marker-alt mr-3"></i>
                    <strong>{address}</strong>
                  </div>
                  <div className="column iconos">
                    {social &&
                      social.map(element => {
                        const { url } = element;
                        return (
                          <a href={element.url} key={url}>
                            <img className="icono" src={element.image} alt="" />
                            <br />
                          </a>
                        );
                      })}
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
