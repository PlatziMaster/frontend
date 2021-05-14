import React from 'react';

export default (props = []) => {
  return (
    <section className="Experience">
      <h1 className="Experience-title">Experience</h1>
      <section className="items">
        {props.experience?.map(item => {
          return (
            <section className="Experience-item" key={item.company}>
              <h2>{item.company}</h2>
              <p>
                {item.startDate} - {item.endDate}
              </p>
              <p>{item.jobDescription}</p>
            </section>
          );
        })}
      </section>
    </section>
  );
};
