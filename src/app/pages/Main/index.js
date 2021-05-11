import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Interests from './components/Interests';
import './Main.scss';

const DATA_API = 'http://localhost:3500/data';

export default () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    (async function () {
      try {
        const resp = await fetch(DATA_API, { method: 'GET' });
        const data = await resp.json();
        setData(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className={loading || error ? 'mainPageContainer loading' : 'mainPageContainer'}>
      {loading && <Spinner animation='border' />}
      {!loading && error && (
        <div>Something bad happended fetching the data. Try reloading the page.</div>
      )}
      {!loading && data && (
        <>
          <Header data={data.header} />
          <Profile data={data.sidePane} />
          <Experience data={data.experience} />
          <Skills data={data.skills} />
          <Interests data={data.interests} />
        </>
      )}
    </div>
  );
};
