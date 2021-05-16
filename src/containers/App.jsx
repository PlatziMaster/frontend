import React from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import * as json from '../../data.json';
//import { getData } from '../utils/getData';

const App = () => {
  const { data } = json; // Get the data 

/*   useEffect(() => {
    setIsLoading(true);
    getData('../../data.json')
      .then(data => console.log(data))
      .catch(error => console.error(error))
  }, []) */

  // Pass the data troughout components by using props
  return (
    <>
      <Header avatar={data.avatar}>
        <About 
          name={data.name} 
          profession={data.profession} 
          adress={data.address}
          email={data.email}
          website={data.website}
          phone={data.phone} />
      </Header>
      <Profile profile={data.Profile} />
      <Experience experience={data.experience} />
      <Academic academic={data.Academic} />
      <Skills skills={data.skills} />
      <Interest interests={data.interest} />
      <Languages languages={data.languages} />
    </>
  )
};

export default App;
