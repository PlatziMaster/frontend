/* eslint-disable react/function-component-definition */
import React from "react";
import Header from "../components/Header";
import BlueArrow from "../components/BlueArrow";
import Display from "../components/Display";
import Categories from "../components/Categories";
import About from "../components/About";
import Social from "../components/Social";
import Languages from "../components/Languages";
import Container from "../components/Container";
import Main from "../components/Main";
import Profile from "../components/Profile";
import Experience from "../components/Experience";
import Academic from "../components/Academic";
import Skills from "../components/Skills";
import Interest from "../components/Interest";
import Footer from "../components/Footer";
import useInitialState from "../hooks/useInitialState";

const API = "http://localhost:3000/data";

const App = () => {
  const Data = useInitialState(API);
  console.log(Data);
  return (
    <Container>
      <Header title="Lateral-Profile">
        <BlueArrow />
        <Display display={Data} />
        <Categories title="Container-Profile">
          <About info={Data} />
          <Social social={Data.social} />
          <Languages languages={Data.languages} />
        </Categories>
      </Header>
      <Main title="Data-Section">
        <Profile profile={Data.profile} />
        <Experience experience={Data.experience} />
        <Academic academic={Data.Academic} />
        <Skills skills={Data.skills} />
        <Interest interest={Data.interest} />
      </Main>
      <Footer />
    </Container>
  );
};

export default App;
