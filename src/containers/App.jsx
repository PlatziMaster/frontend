import React, { useEffect, useState } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';
import Spinner from '../components/Spinner';

const App = () => {
  /**
   * Se tiene un estado unico en el nodo más alto
   * de la aplicación
   */
  const [data, setdata] = useState(null);

  /**
   * Se obtiene la información de la "API"
   * y se setea como el nuevo estado, esto debe ocurrir al
   * cargar el componente por eso se usa un useEffect
   */
  useEffect(() => {
    let req = getData('../../data.json ');
    req.then(res => setdata(res.data));
  }, []);

  /**
   * Si la respuesta no obtiene información entonces pedimos
   * mostramos un spinner de carga
   */

  if (data === null) {
    return <Spinner />;
  }

  /**
   * Cada componente solo recibe lo que necesita que
   * necesita
   */
  return (
    <main className="Content">
      <Header
        avatar={data.avatar}
        name={data.name}
        profession={data.profession}
        socialMedia={data.social}
      >
        <About data={data} />
      </Header>
      <Profile description={data.Profile} />
      <Experience experience={data.experience} />

      <div className="Professional-content">
        <Academic academic={data.Academic} />
        <Skills skills={data.skills} />
        <Interest interest={data.interest} />
        <Languages languages={data.languages} />
      </div>
    </main>
  );
};

export default App;
