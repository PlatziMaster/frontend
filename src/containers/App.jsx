// Dependencies
import React, { useState, useEffect } from 'react';

// Components
import { Layout } from '../components/Layout';
import { LeftSection } from '../components/LeftSection';
import { Resume } from '../components/Resume';
import { RightSection } from '../components/RightSection';

// Utils
import { getData } from '../utils/getData';

const App = () => {
  const [resumeInfo, setResumeInfo] = useState(null);
  useEffect(() => {
    setTimeout(() => setResumeInfo(getData()), 1000);
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
