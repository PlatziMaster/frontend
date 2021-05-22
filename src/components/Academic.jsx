import React from 'react';
import '../styles/components/Academic.styl';

const Academic = props => {
  const { academic } = props;

  return (
    <div className="box">
      <div className="information">
        <strong>
          <h1 className="title is-4">Academic</h1>
        </strong>
      </div>
      {academic &&
        academic.map(element => {
          const { id } = element;
          return (
            <article  key={id}>
              <div className="pt-3">
                <strong> 
                  <h1 className="subtitle is-5">
                    <strong>
                      <p>{element.degree}</p>
                    </strong>
                    <strong>
                      <h1>
                        <p>{element.institution}</p>
                      </h1>
                    </strong>
                    <strong>
                      <h1>
                        <p>{element.startDate}</p>
                      </h1>
                    </strong>
                    <strong>
                      <h1>
                        <p>{element.endDate}</p>
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

export default Academic;
