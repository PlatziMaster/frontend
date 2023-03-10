import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import Certificates from '../components/Certificates';

import getData from '../utils/getData';
import styled from "styled-components";

const Wrapper = styled.div`
  background: #FFFAFF;
  display: grid;
  grid-template-columns: 20% 80%;
  font-family: Arial, Helvetica, sans-serif;
  align-content: center;
  grid-gap: 10px;
  background: linear-gradient(to right, #d8dfde, #aa5151);
`;

const JpgAvatar = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Body = styled.div`
  border: 2px solid #f8bbd0;
  padding: 1em;
`;

const SideBar = styled.div`
  border: 2px solid #e1bee7;
  padding: 1em;
;`

const Underhead = styled.div`
  border: 2px solid #b2ebf2;
  padding: 1em;
`;


const App = () => {

  const [data, setData] = useState({})
  
  useEffect(() => {
    try {
      getData('http://localhost:3000/data').then((data) => {
        console.log(data)
        setData(data);
      });
    } catch (error) { }
  }, []);
    
  return (
    <React.Fragment>
          <Wrapper>
            <div className='Avatar'>
              <JpgAvatar src={data.avatar} alt={data.name} />
            </div>
            <SideBar>
              <Header 
                
                name={data.name}
                profession={data.profession}
                address={data.address}
                email={data.email}
                phone={data.phone}
                website={data.website}
              />
            </SideBar>
            <Underhead>
                <Skills skills={data.skills}/>
                <Certificates certificates={data.certificate}/>
            </Underhead>
            <Body>
              <Profile description={data.Profile}/>
      
              <Experience experience={data.experience}/>
      
              <Academic academic={data.academic}/>
    
              <Interest interest={data.interest}/>
    
              <Languages languages={data.languages}/>
            </Body>
            
          </Wrapper>
            
    </React.Fragment>
  )
};

export default App;
