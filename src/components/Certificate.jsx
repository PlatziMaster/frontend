import React from 'react';
import '../styles/components/Interest.styl';

const Certificate = props => {
  const { certificate } = props;

  return (
    <div className="box">
      <div className="information">
        <strong>
          <h1 className="title is-4">Certificates</h1>
        </strong>
      </div>
      {certificate &&
        certificate.map(element => {
          const { id } = element;
          return (
            <article >
              <div className="pt-3" key={id}>
                <strong> 
                  <h1 className="subtitle is-5">
                    <strong>
                      <p>{element.name}</p>
                    </strong>
                    <strong>
                      <h1>
                        <p>{element.institution}</p>
                      </h1>
                    </strong>
                    <strong>
                      <h1>
                        <p>{element.date}</p>
                      </h1>
                    </strong>
                  </h1>
                </strong>
              </div>
            </article>
          );
        })}
    </div>
  );
};

export default Certificate;
