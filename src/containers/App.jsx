import React from 'react';
import useGetData from '../hooks/useGetData';
import '../styles/containers/App.styl';
import Layout from '../layout/Layout';
import Header from '../components/Header';
import Picture from '../components/Picture';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import Footer from '../components/Footer';

const App = () => {
  const data = useGetData();
  return (
    <Layout>
      <Header>
        <Picture {...data} />
        <About {...data} />
      </Header>
      <Profile {...data} />
      <Experience {...data} />
      <Academic {...data} />
      <Skills {...data} />
      <Interest {...data} />
      <Languages {...data} />
      <Footer {...data} />

    </Layout>
  );
};

export default App;
