import React from 'react';

const Experience = ({ experience = [], projects = [] }) => {

  return (
    <div className='experience__container'>
      <h4>- My Experience</h4>
      <h2>Jobs and Projects.</h2>
      <div className='experience__card'>
        <div className='card__jobs'>
          {
            experience.map((e) => {
              return (
                <div key={e.id} className='card__container'>
                  <p className='card__date'>{e.date}</p>
                  <h3 className='card__tittle'>{e.jobTitle}</h3>
                  <p className='card__company'>{e.company}</p>
                  <p className='card__description'>{e.jobDescription}</p>
                </div>
              );
            })
          }
        </div>

        <div className='card__projects'>
          {
            projects.map((p) => {
              return (
                <div key={p.id} className='card__container'>
                  <p className='card__date'>{p.projectDate}</p>
                  <h3 className='card__tittle'>{p.projectTitle}</h3>
                  <p className='card__description'>{p.projectDescription}</p>
                  <a className='card__more' href={p.readMore}>Read More</a>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Experience;
