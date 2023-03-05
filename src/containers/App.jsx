import Layout from '../components/Layout';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import { useEffect, useState } from 'react';
import getData from '../utils/getData';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

const App = () => {
  const [allData, setAllData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getData();
      setAllData(data);
    }
    fetchData()
  }, []);

  if (!allData) return <h1>Loading...</h1>

  console.log(allData);

  return (
    <Layout>
      <Header>
        <About personalInfo={{ name: allData.name, role: allData.role, address: allData.address, phone: allData.phone, email: allData.email, links: allData.links }} />
      </Header>
      <Profile profile={allData.profile} />
      <Experience experience={allData.experience} />
      <Projects projects={allData.projects} />
      <Skills skills={allData.skills} />
      <Academic academic={allData.academic} />
      <Languages languages={allData.languages} />
      <Interest interests={allData.interest} />
    </Layout>
  )
};

export default App;
