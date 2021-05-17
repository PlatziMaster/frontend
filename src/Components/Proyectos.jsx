import React from 'react';
import { FaWordpressSimple } from 'react-icons/fa';
import { FaTrophy } from 'react-icons/fa';

class Proyectos extends React.Component {
  render() {
    return (
      <div className="">
        <h2>Proyectos</h2>
        <p>En los siguientes proyectos hemos participado en temas básicos de desarrollo como parte del aprendizaje</p>
        <div className="grid gap-3 lg:grid-cols-2 xl:grid-cols-4">
          <a href="https://tusartistas.com">
            <div className="card">
            <img src="https://migueldeveloper.s3.amazonaws.com/icon-tusartistas.png" alt="" />
              <h3>TusArtistas</h3>
              <p>
                Plataforma digital donde las personas peuden reservar artistas locales para sus eventos. En 2017 el proyecto fue ganador de unso de los Estimulos del Ministerio de Cultura de Colombia.
              </p>
              <div>
                <br />
                <p>Tecnología del producto:</p>
                <div className="flex items-center ">              
                  <i>
                    <FaWordpressSimple />
                  </i>
                  <p>Wordpress</p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://disonan.com">
            <div className="card">
            <img src="https://migueldeveloper.s3.amazonaws.com/logo-disonan.svg" alt="" />
              <h3>Dísonan</h3>
              <p>
                Plataforma de educaicón virutal para musicos profesionales, el incio de este proyecto se financia con una beca de Estimulos del Ministerios de cultura
              </p>
              <div>
                <br />
                <p>Tecnología del producto:</p>
                <div className="flex items-center ">              
                  <i>
                    <FaWordpressSimple />
                  </i>
                  <p>React</p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://panacea-marketing.com">
            <div className="card">
            <img src="https://migueldeveloper.s3.amazonaws.com/logo-panacea.png" alt="" />
              <h3>Panacea Marketing</h3>
              <p>
                Agencia de marketing digital que ayuda a empresas locales en los temas relacioandos con pauta digital e implmentación de tecnología.
              </p>
              <div>
                <br />
                <p>Tecnología del producto:</p>
                <div className="flex items-center ">              
                  <i>
                    <FaWordpressSimple />
                  </i>
                  <p>HTML</p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://sinfonicasantander.org">
            <div className="card">
            <img src="https://migueldeveloper.s3.amazonaws.com/logo-OSS.png" alt="" />
              <h3>Sinfónica Santander</h3>
              <p>
                Proyecto que busca la financiación de la primera orquesta Sinfónica de Santander. Proyecto en Construcción
              </p>
              <div>
                <br />
                <p>Tecnología del producto:</p>
                <div className="flex items-center ">              
                  <i>
                    <FaWordpressSimple />
                  </i>
                  <p>Wordpress</p>
                </div>
              </div>
            </div>
          </a>

          
        </div>
      </div>
    );
  }
}
export default Proyectos;
