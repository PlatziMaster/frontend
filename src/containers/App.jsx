/* eslint-disable arrow-parens */
import React, { useState, Fragment, useEffect } from "react";
import "../styles/components/App.styl";
import Header from "../components/Header";
import About from "../components/About";
import Profile from "../components/Profile";
import Experience from "../components/Experience";
import Academic from "../components/Academic";
import Skills from "../components/Skills";
import Interest from "../components/Interest";
import Languages from "../components/Languages";
import getData from "../utils/getData";

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
        <h1>isLoading</h1>
      ) : (
        <div className="Card-container">
          <Header>
            <About
              fullName={data.data.name}
              job={data.data.profession}
              phone={data.data.phone}
              email={data.data.email}
              website={data.data.website}
              address={data.data.address}
            />
          </Header>
          <Profile title="Profile" profileDsc={data.data.Profile} />
          <Experience title="Experience" expItems={data.data.experience} />
          <div className="Items-wrapper">
            <Academic title="Academic" academicItems={data.data.Academic} />
            <Skills title="Skills" skillsItems={data.data.skills} />
            <Interest title="Interest" interestItems={data.data.interest} />
            <Languages title="Languages" languagesItems={data.data.languages} />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default App;
