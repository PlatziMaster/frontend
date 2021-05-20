// Dependencies
import React, { useState, useEffect } from 'react';

// Components
import { Layout } from '../components/Layout';
import { LeftSection } from '../components/LeftSection';
import { Resume } from '../components/Resume';
import { RightSection } from '../components/RightSection';

// Utils
import getData from '../utils/getData';

const App = () => {
  const [resumeInfo, setResumeInfo] = useState(null);

  useEffect(() => {
    getData('http://localhost:3000/data')
      .then((res) => setResumeInfo(res));
  }, []);

  return (
    <Layout>
      {!resumeInfo ? null : (
        <>
          <Resume>
            <LeftSection resumeInfo={resumeInfo} />
            <RightSection resumeInfo={resumeInfo} />
          </Resume>
        </>
      )}
    </Layout>
  );
};

export default App;
