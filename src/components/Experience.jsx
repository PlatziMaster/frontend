import React, { useContext } from 'react';
import Project from './Project';
import { appContext } from '../containers/AppContext';
import '../styles/components/Experience.styl';

const Experience = () => {
  const {
    data: {
      dataFromApi: {
        data: { experience },
      },
    },
  } = useContext(appContext);

  return (
    <section className="Container Experience Card-glass">
      <h4 className="H4-title">Experience</h4>
      <div className="Experience-wrapper">
        {experience.map(
          ({ complete, projectDescription, projectName, stak, url }) => (
            <Project
              key={projectName}
              complete={complete}
              projectName={projectName}
              projectDescription={projectDescription}
              stak={stak}
              url={url}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Experience;
