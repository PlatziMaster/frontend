import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaRssSquare } from 'react-icons/fa';

class Profile extends React.Component {
  render() {
    return (
      <div className="section">
        <div>
          <img
            className="profile-image"
            src="https://migueldeveloper.s3.amazonaws.com/IMG_0323.jpg"
            alt="foto de perfil"
          />
        </div>
        <div className="card">
          <div>
            <h1 className="">Miguel Alfonso López Moreno</h1>
            <h3 className="card-subtitle">Músico y desarrollador front-end</h3>
            <p>
              Músico violinsita amante de la tecnología. Ganador en varias ocaciones de estimulos de Mincultura. Actualmente dedica su tiempo a desarrollar proyectos propios y estudiar desarrollo Front-End
            </p>
            <a href="">Ver perfil en LinkedIn</a>
          </div>
          <div className="flex">
            <div>
              <a href="">
                <i className="icons">
                  <FaFacebook />
                </i>
              </a>
            </div>
            <div>
              <FaGithub />
            </div>
            <div>
              <FaRssSquare />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
