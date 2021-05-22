import React from 'react';
import '../styles/components/Experience.styl';

const Experience = props => {
  const { experience } = props;

  return (
    <div className="box">
      <div className="information">
        <strong>
          <h1 className="title is-4">Proyects</h1>
        </strong>
      </div>
      {experience &&
        experience.map(element => {
          const { id } = element;
          return (
            <article key={id}>
              <div className="pt-3">
                <strong>
                  <h1 className="subtitle is-5">
                   <strong><p>{element.name}</p></strong> 
                  </h1>
                </strong>
                <strong>
                  <h1>
                    <p>{element.description}</p>
                  </h1>
                </strong>
                <a href={element.Repositorio} >
                        Go to repository
                  <br />
                </a>
              </div>
            </article>
          );
        })}
    </div>
  );
};

export default Experience;
