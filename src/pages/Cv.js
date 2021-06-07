import React from 'react';
import '../styles/pages/Cv.styl';

import Header from '../components/Header';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

class Cv extends React.Component {
  render() {
    return (
      <div>
        <Header
          name="Edgar Ramon Gonzalez Contreras"
          jobTitle="Software Engineer"
          twitterUrl="https://www.twitter.com/edgargc026"
          instagramUrl="https://www.instagram.com/edgargc026"
          githubUrl="https://www.github.com/edgargc026"
          linkedinUrl="https://www.linkedin.com/in/edgargc026"
        />
        <section className="container">
          <Profile />
        </section>

        <section className="container">
          <Experience />
        </section>

        <section className="container">
          <div className="row-grid">
            <Academic />
            <Skills />
          </div>
        </section>
        <section className="container">
          <div className="row-grid">
            <Interest />
            <Languages />
          </div>
        </section>
      </div>
    );
  }
}

export default Cv;
