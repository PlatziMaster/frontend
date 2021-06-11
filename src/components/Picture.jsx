import React from 'react';
import '../styles/components/Picture.styl';

const Picture = (data) => {
  const { avatar, name } = data;
  return (
    <section className='Picture-container'>
      <img className='Picture' src={avatar} alt={name} />
    </section>
  );
};

export default Picture;
