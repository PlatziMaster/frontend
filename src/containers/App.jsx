import React from 'react';
import Loading from '../components/Loading';
import NotFound from '../components/NotFound';

import useFetchData from '../hooks/useFetchData';
import CurriculumVitae from './CurriculumVitae';

const App = () => {
  const { data, loading, error } = useFetchData();

  if (loading) return <Loading />;
  if (error) return <NotFound error={error} />;

  return (
    <>
      {Object.keys(data).length && <CurriculumVitae data={data} />}
    </>
  );
};

export default App;
