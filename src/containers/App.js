import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import getData from "../utils/getData";
import Profile from "../components/Profile";
import Languages from '../components/Languages';
import Interest from '../components/Interest';


const App = () => {

    const API = "http://localhost:3000/data";

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState({});

    useEffect(() =>{
        getData(API).then(response => {
                setIsLoaded(true);
                setData(response);
            },
            error => {
                setIsLoaded(false);
                setError(error);
            }
        )
    }, []);

    //Functions
    const aboutFunc = ()=>{
        if(isLoaded && data !== {} && data.contact){
            return data.contact
        }
    }
    const educationFun = ()=>{
        if(isLoaded && data !== {} && data.Education){
            return data.Education
        }
    }
    const experienceFunc = ()=>{
        if(isLoaded && data !== {} && data.Projects){
            return data.Projects
        }
    }

    const skillsFunc = () =>{
        if (isLoaded && data !== {} && data.Skills){
            return data.Skills;
        }

    }
    const languageFunc = ()=>{
        if (isLoaded && data !== {} && data.Languages){
            return data.Languages;
        }
    }
    const interestFuc = ()=>{
        if (isLoaded && data !== {} && data.Interest){
            return data.Interest;
        }
    }

    return (
        <>
            <Header
                image = {data.Image}
                >
                <About

                  contact = {aboutFunc()}
                />
            </Header>
            <Profile
                description = {data.Description}
                description2 = {data.Description2}
                description3 = {data.Description3}/>
            <Container fluid>
                <Row>
                    <Experience
                        experience = {experienceFunc()}
                    />
                    <Academic
                        education = {educationFun()}
                    />
                </Row>
                <Row>
                    <Skills
                        skills = {skillsFunc()}
                    />
                </Row>
            </Container>

            <Container fluid>
                <Row className= "mb-4">
                     <Languages
                        languages = {languageFunc()}
                     />
                    <Interest
                        interests = {interestFuc()}
                    />
                </Row>
            </Container>


        </>
    )
};

export default App;