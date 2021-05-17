import React, { useState, useEffect} from 'react';
import Header from './components/Header';
import About from './components/About';
import Body from './components/Body';
import Profile from './components/Profile';
import Experience from './components/Experience'
import Footer from './components/Footer';
import Academic from './components/Academic';
import Skills from './components/Skills';
import Interest from './components/Interest';
import Languages from './components/Languages';
import getData from '../utils/getData';
import '../assets/App.styl';

const API = 'http://localhost:3000/data';


const App = () => {
  const data = getData(API);
  return data.lengthength === 0 ? <h1>Loading...</h1> :(
    <div className="App">

      <Header
      avatar={data.avatar}
      >
          <About
          data={data}
          />
      </Header>

      <Body title="Profile">
      {data.certificate.map(item =>
        <Profile key={item.id} {...item} />
      )}
      </Body>

      <Body title="Experience">
      {data.experience.map(item =>
        <Experience key={item.id} {...item} />
      )}
      </Body>

      <Footer title="Academic">
      {data.Academic.map(item =>
        <Academic key={item.id} {...item} />
      )}
      </Footer>
      <Footer title="Skills">
      {data.skills.map(item =>
        <Skills key={item.id} {...item} />
      )}
      </Footer>
      <Footer title="Interest">
      {data.interest.map(item =>
        <Interest key={item.id} {...item} />
      )}
      </Footer>
      <Footer title="Languages">
      {data.languages.map(item =>
        <Languages key={item.id} {...item} />
      )}
      </Footer>
    </div>
  )
}

export default App;
