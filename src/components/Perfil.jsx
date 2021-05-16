import '../styles/components/App.styl';
function Perfil() {
  return (
    <div className="perfil-container">
      <div className="perfil-img">
        <img src="https://picsum.photos/300/400" alt="" />
      </div>
      {/* Contacto */}
      <div className="perfil-container-box contacto">
        <div className="perfil-titulo">
          <h2>Contacto</h2>
        </div>
        <div className="perfil-lista">
          <ul>
            <li>Ubicación: Santiago, Chile.</li>
            <li>Teléfono: +56 9 9129 14 68</li>
            <li>Email: alejandro.sapa@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* Redes */}
      <div className="perfil-container-box redes">
        <div className="perfil-titulo">
          <h2>Redes</h2>
        </div>
        <div className="perfil-lista">
          <ul>
            <li>LinkedIn</li>
            <li>Behance</li>
            <li>Dribbble</li>
            <li>Github</li>
          </ul>
        </div>
      </div>

      {/* Tecnologias */}
      <div className="perfil-container-box tecnologias">
        <div className="perfil-titulo">
          <h2>Tecnologias</h2>
        </div>
        <div className="perfil-lista">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>GIT</li>
            <li>GITHUB</li>
            <li>SASS</li>
            <li>SUITE ADOBE</li>
            <li>SUITE AFFINITY</li>
            <li>FIGMA</li>
            <li>WORDPRESS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
