import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import Title from '../components/Title';
import Container from '../components/Container';
import ContainerE from '../components/ContainerE';
import ColumnContainer from '../components/ColumnContainer';

import getData from '../utils/getData';
 
import '../styles/components/App.styl';

const App = () => {

  const [infoCV, setInfoCV] = useState({ experience: [], certificate: [], Academic: [], skills: [], interest: [], languages: [], social: [] }); 

  useEffect(() => {
    getData('https://v6u094t7gf.api.quickmocker.com/data')
    .then(data => setInfoCV(data))
    .catch(err => console.log(err));  
  }, []); 

    return (
    <div className="App">
      <Header data={infoCV} >
        {infoCV.social.map(item =>
          <About key={item.name} {...item} />
        )}
      </Header>
      <Profile data={infoCV}/>
      <ContainerE>
        <Title title="Experience"/>
        {infoCV.experience.map(item =>
          <Experience key={item.company} {...item} />
        )}
      </ContainerE>  
      <Container>
        <ColumnContainer>
          <Title title="Academic"/>
          {infoCV.Academic.map(item =>
            <Academic key={item.degree} {...item} />
          )}
        </ColumnContainer>  
        <ColumnContainer>
          <Title title="Skills"/>
          {infoCV.skills.map(item =>
            <Skills key={item.name} {...item} />
          )}
        </ColumnContainer>  
      </Container>  
      <Container>
        <ColumnContainer>
          <Title title="Interests"/>       
            {infoCV.interest.reduce((finalArray, name  ) => {
              finalArray.push({name});
              return finalArray
            }, []).map(item =>  
              <Interest key={item.name} {...item} />)
            }
        </ColumnContainer> 
        <ColumnContainer>  
          <Title title="Languages"/>
         
          {infoCV.languages.map(item =>
            <Languages key={item.name} {...item} />
          )}
        </ColumnContainer>  
      </Container> 
    </div>
  )
};

export default App;


