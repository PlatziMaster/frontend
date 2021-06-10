import React,{ useEffect, useState } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import LayoutContainer from '../components/LayoutContainer'
import { Data } from '../utils/getData.js'


export const dataContext = React.createContext();

const App = () => {

    const [data, setData] = useState({});

    useEffect (() => {

    Data('http://localhost:3000/data')
        .then( userData => setData( userData ))
    
    },[])


    return (
        <>
            <dataContext.Provider value = { data } >
                <Header>
                    <About />
                </Header>
                <Profile />
                <Experience />
                <LayoutContainer>
                    <Academic />
                    <Skills />
                    <Interest />
                    <Languages />
                </LayoutContainer>
            </dataContext.Provider>
        </>
    )
};

export default App;
