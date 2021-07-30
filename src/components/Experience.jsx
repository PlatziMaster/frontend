import React from 'react';
import '../styles/components/Experience.styl';

const Experience = ({ experience = [], projects = [] }) => {

  return (
    <div className='Experience-title'>
      <h4>- My Experience</h4>
      <div className='experience__card'>
        <div className='card__jobs'>
          {
            experience?.map((e) => {
              return (
                <div key={e.id} className='Experience-item'>
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
            projects?.map((p) => {
              return (
                <div key={p.id} className='Experience-item'>
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
