import React from 'react';

const Experience = (props) => {
  const { experiences } = props;

  return (
    <>
      <section className='Main__experience'>
        <div className='Experience-title'>
          <h2>Professional Experience</h2>
        </div>
        <div className='Experience-container'>
          {
            experiences &&
              experiences.map((element) => {
                const { company } = element;
                return (
                  <article key={company} className='Experience-item'>
                    <div className='Item-img'>
                      <a href={element.GitHubPages} target='_black'>
                        <img src={element.image} alt={element.company} />
                      </a>
                    </div>
                    <div className='Item-dates'>
                      <h4>Company:</h4>
                      <p>{element.company}</p>
                      <h4>End Date:</h4>
                      <p>{element.endDate}</p>
                      <h4>Job Description:</h4>
                      <p>{element.jobDescription}</p>
                      <h4>Job Title:</h4>
                      <p>{element.jobTitle}</p>
                      <h4>Start Date:</h4>
                      <p>{element.startDate}</p>
                      <h4>Repository:</h4>
                      <p><a href={element.repository} target='_black'>{element.repository}</a></p>
                    </div>
                  </article>
                );
              })
          }
        </div>
      </section>
    </>
  );
};

export default Experience;
