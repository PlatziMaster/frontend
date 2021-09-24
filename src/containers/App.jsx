import React from 'react';
import '../styles/components/styles.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

function App() {
  return (
    
    <section>
      <div className="container">
        <div className="row">
          <div className='col s12'>
            <Header/> 
            <Profile/>
            <Experience/>
          </div>
          <div className="col s6">
            <Academic/> 
          </div>
          <div className="col s6">
            <Skills/> 
          </div>
          <div className="col s6">
            <Interest/> 
          </div>
          <div className="col s6">
            <Languages/> 
          </div>
        </div>
      </div>
    </section>
    
 );
}

export default App;