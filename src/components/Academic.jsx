import React from 'react';

const Academic = (props) => {
  const { academic } = props;

  return (
    <>
      <section className='Main__academic'>
        <div className='Academic-title'>
          <h2>Academic</h2>
        </div>
        <div className='Academic-container'>
          {
            academic &&
              academic.map((element) => {
                const { degree } = element;
                return (
                  <article key={degree} className='Academic-item'>
                    <h4>Degree:</h4>
                    <p>{element.degree}</p>
                    <h4>Description:</h4>
                    <p>{element.description}</p>
                    <h4>End Date:</h4>
                    <p>{element.endDate}</p>
                    <h4>Institution:</h4>
                    <p>{element.institution}</p>
                    <h4>Start Date:</h4>
                    <p>{element.startDate}</p>
                  </article>
                );
              })
          }
        </div>
      </section>
    </>
  );
};

export default Academic;
