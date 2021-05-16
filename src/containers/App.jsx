import React from 'react';
import '../styles/containers/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Languages from '../components/Languages';
import info from '../utils/info';
import Interests from '../components/Interests';

const App = () => {
  //const url = 'http://localhost:3000/data';
  //const [data, setData] = useState([]);

  /* useEffect(() => {
    getData(url)
      .then(res => setData(res))
      .catch(error => console.log(error));
  }, [url]); */

  const {
    name,
    profession,
    address,
    email,
    website,
    phone,
    avatar,
    profile,
    experience,
    academic,
    certificate,
    skills,
    languages,
    interests,

  } = info;

  return (
    <>
      <Header name={name} profession={profession} avatar={avatar} />
      <About address={address} email={email} website={website} phone={phone} />
      <Profile data={profile} />
      <Experience data={experience} />
      <div className='body_cv'>
        <div className='left'>
        <Academic academic={academic} certificate={certificate} />
        </div>
        <div className='right'>
          <Languages data={languages} />
          <Skills data={skills} />
          <Interests data={interests} />
        </div>
      </div>
    </>
  );
};

export default App;
