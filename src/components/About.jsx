import React from 'react';
import { getData } from '../utils/getData';

const URL = 'https://rickandmortyapi.com/api/character';
export const About = () => {
  const datos = getData(URL);

  if (datos.length === 0) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div>
      <h1 className="About-title"></h1>
      {datos.map((item, index) => {
        return (
          <div key={index} style={{ display: 'flex' }}>
            <h2>{item.name}</h2>
            <img src={item.image} />
          </div>
        );
      })}
      <img src={datos[0].image} alt="" />
      <p className="About-item"></p>
      <p className="About-item"></p>
      <p className="About-item"></p>
      <p className="About-item"></p>
    </div>
  );
};
