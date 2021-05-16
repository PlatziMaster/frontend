import '../styles/components/App.styl';
import '../styles/components/Objetivo.styl';

function Objetivo() {
  return (
    <div className="obj-container">
      <div className="obj-nombre">
        <h2>Manuel Alejandro</h2>
        <h1>Saez Palominos</h1>
        <div className="boton">Disenador Grafico</div>
      </div>
      {/* Objetivo profesional */}
      <div className="obj-pro">
        <div className="perfil-titulo obj-prof-titulo">
          <h2>Objetivo Profesional</h2>
        </div>
        <div className="obj-prof-contenido">
          Soy un profesional especializado en el área de diseño, con mas de 10
          años de experiencia en el desarrollo de soluciones tanto gráficas como
          audiovisuales. Busco ser parte del programa Platzi Master para
          potenciar mis habilidades, y abrirme terreno en el mundo del
          desarrollo web.
        </div>
      </div>
      {/* Experiencia Profesional */}
      <div className="exp-pro">
        <div className="perfil-titulo obj-prof-titulo">
          <h2>Experiencia Profesional</h2>
        </div>
        <div className="exp-pro-titulo">
          <div className="fecha">2020 - Actualidad</div>
          <span>Desafío Latam - Diseñador Gráfico</span>
        </div>
        <div className="exp-pro-lista">
          <ul>
            <li>Desarrollo de piezas gráficas para Redes Sociales</li>
            <li>Motion Graphics y Post-Producción de video</li>
            <li>Diseño editorial para ebooks</li>
            <li>Desarrollo de sistemas de diseño</li>
            <li>Construcción de manuales de identidad visual de marca</li>
            <li>Diseño corporativo</li>
            <li>Diseño de landing pages</li>
          </ul>
        </div>
      </div>

      {/* Experiencia Profesional */}
      <div className="exp-pro">
        <div className="exp-pro-titulo">
          <div className="fecha">2017 - 2020</div>
          <span>5 Luchas Clandestino - Promotor</span>
        </div>
        <div className="exp-pro-lista">
          <ul>
            <li>Desarrollo de piezas gráficas para Redes Sociales</li>
            <li>Motion Graphics y Post-Producción de video</li>
            <li>Diseño editorial para ebooks</li>
            <li>Desarrollo de sistemas de diseño</li>
            <li>Construcción de manuales de identidad visual de marca</li>
            <li>Diseño corporativo</li>
            <li>Diseño de landing pages</li>
          </ul>
        </div>
      </div>
      {/* Informacion Academica */}
      <div className="academia-container">
        <div className="perfil-titulo obj-prof-titulo">
          <h2>Información Académica</h2>
        </div>
        <div className="exp-pro-titulo">
          <div className="fecha">2018 - Actualidad</div>
          <span>Platzi</span>
        </div>
        <div className="exp-pro-titulo">
          <div className="fecha">2011 - 2012</div>
          <span>Prod. Crossmedia - U. Gabriela Mistral.</span>
        </div>
      </div>

      <div className="footer">
        <div className="idiomas">
          <div className="perfil-titulo obj-prof-titulo">
            <h2>Idiomas</h2>
          </div>
          <div className="exp-pro-lista">
            <ul>
              <li>Español Nativo</li>
              <li>Ingles B1</li>
            </ul>
          </div>
        </div>

        <div className="habilidades">
          <div className="perfil-titulo obj-prof-titulo">
            <h2>Habilidades</h2>
          </div>
          <div className="exp-pro-lista">
            <ul>
              <li>Autodidacta</li>
              <li>Comprometido</li>
              <li>Honesto</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Objetivo;
