import React from 'react';

const Interest = (props) => {
  const { interests } = props;

  return (
    <>
      <section className='Main-interest'>
        <h2 className='Interest-title'>Interest</h2>
        <div className='Interest-container'>
          {
            interests &&
              interests.map((element) => {
                return (
                  <article key={element} className='Interest-item'>
                    <h4>{element}</h4>
                  </article>
                );
              })
          }
        </div>
      </section>
    </>
  );
};

export default Interest;
