import React from 'react';

const Languages = (props) => {
  const { language } = props;

  return (
    <>
      <section className='Main-languages'>
        <h2 className='Languages-title'>Languages</h2>
        <div className='Languages-container'>
          {
            language &&
              language.map((element) => {
                const { name } = element;
                return (
                  <article key={name} className='Languages-item'>
                    <h4>Language:</h4>
                    <p>{element.name}</p>
                    <h4>Percentage:</h4>
                    <p>{element.percentage}</p>
                  </article>
                );
              })
          }
        </div>
      </section>
    </>
  );
};

export default Languages;
