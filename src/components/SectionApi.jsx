import React from 'react';
import { getData } from '../utils/getData';
import '../styles/components/SectionApi.styl';

const API = 'https://rickandmortyapi.com/api/character/';
export const SectionApi = () => {
  const characters = getData(API);
  console.log(characters);

  if (characters.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div class="Characters-inner">
            <h2 className='Characters-title'>API of Rick and Morty</h2>
            <br />
            <article class="Characters-card">
                <img src={characters[0].image} alt="${characters.name}" />
                <h2>{characters[0].name}</h2>
            </article>
            <article class="Characters-card">
                <p>Episodes: <span>{characters[0].episode.length}</span></p>
                <p>Status: <span>{characters[0].status}</span></p>
                <p>Species: <span>{characters[0].species}</span></p>
                <p>Gender: <span>{characters[0].gender}</span></p>
                <p>Origin: <span>{characters[0].origin.name}</span></p>
                <p>Last Location: <span>{characters[0].location.name}</span></p>
            </article>
        </div>
  )
}
