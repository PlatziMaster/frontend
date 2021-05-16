import React from 'react';

const Certificates = (props) => {
  const { certificates } = props;

  return (
    <>
      <section className='Main-certificates'>
        <div className='Certificates-title'>
          <h2>Certificates</h2>
          <p>
            Para ver todos mis certificados pueden acceder al siguiente
            <a href='https://platzi.com/p/kikepal88/' target='_blank' rel='noreferrer'> Link</a>
          </p>
        </div>
        <div className='Certificates-container'>
          {
            certificates &&
              certificates.map((element) => {
                const { name } = element;
                return (
                  <article key={name} className='Certificates-item'>
                    <h4>Institution:</h4>
                    <p>{element.institution}</p>
                    <h4>Course Name:</h4>
                    <p>{element.name}</p>
                    <h4>Date:</h4>
                    <p>{element.date}</p>
                    <h4>Description:</h4>
                    <p>{element.description}</p>
                  </article>
                );
              })
          }
        </div>
      </section>
    </>
  );
};

export default Certificates;
