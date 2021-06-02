import React from 'react';
import BgVideo from '../assets/images/Bg.mp4';
import { Video } from '../styles/components/BgStyle';

const Bg = () => {
  return (
    <Video
      autoPlay
      muted
      loop
    >
      <source src={BgVideo} type='video/mp4' />
    </Video>
  );
};

export default Bg;
