import React from 'react';

import react from '../assets/images/reactjs.png';
import js from '../assets/images/js.png';
import css from '../assets/images/css3.png';
import mysql from '../assets/images/mysql.png';
import postgres from '../assets/images/postgresql.png';
import webpack from '../assets/images/webpack.png';

import { Img } from '../styles/components/SkillsLogos';

const LogoSkill = ({ id }) => {

  switch (id) {
    case 1:
      return <Img src={js} alt='JavaScript' />;
    case 2:
      return <Img src={css} alt='JavaScript' />;
    case 3:
      return <Img src={react} alt='JavaScript' />;
    case 4:
      return <Img src={react} alt='JavaScript' />;
    case 5:
      return <Img src={webpack} alt='JavaScript' />;
    case 6:
      return <Img src={postgres} alt='JavaScript' />;
    case 7:
      return <Img src={mysql} alt='JavaScript' />;

  }

};

export default LogoSkill;
