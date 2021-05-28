import Header from "../components/Header";
import About from "../components/About";
import Profile from "../components/Profile";
import Experience from "../components/Experience";
import Academic from "../components/Academic";
import Skills from "../components/Skills";
import Interest from "../components/Interest";
import Languages from "../components/Languages";
import React, { useState, Fragment, useEffect } from "react";
import getData from "../utils/getData";
import "../styles/components/App.styl";

const App = () => {
  const [data, setData] = useState({ isLoading: true, data: undefined });

  useEffect(() => {
    getData("../../data.json").then(promiseData => {
      if (data.isLoading) {
        setData({ data: promiseData.data, isLoading: false });
      }
    });
  }, []);

  return (
    <Fragment>
      {data.isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div className="Card-container">
          <Header>
            <About
              avatar={data.data.avatar}
              title={data.data.name}
              job={data.data.profession}
              phone={data.data.phone}
              email={data.data.email}
              website={data.data.website}
              address={data.data.address}
            />
          </Header>
          <Profile profileDsc={data.data.Profile} />
          <Experience expItems={data.data.experience} />
          <div className="Items-line">
            <Academic  academicItems={data.data.Academic} />
            <Skills    skillsItems={data.data.skills} />
            <Interest  interestItems={data.data.interest} />
            <Languages languagesItems={data.data.languages} />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default App;
