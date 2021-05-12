import React from 'react';
import '../styles/containers/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Languages from '../components/Languages';
import Social from '../components/Social';
//import getData from '../utils/getData';
import dataJson from '../utils/data';

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
    social,
    username,
  } = dataJson;

  return (
    <>
      <Header name={name} profession={profession} avatar={avatar} />
      <div className='body_cv'>
        <div className='left'>
          <About address={address} email={email} website={website} phone={phone} />
          <Skills data={skills} />
          <Languages data={languages} />
          <Social data={social} username={username} />
        </div>
        <div className='right'>
          <Profile data={profile} />
          <div className='divider'>-</div>
          <Academic academic={academic} certificate={certificate} />
          <div className='divider'>-</div>
          <Experience data={experience} />
        </div>
      </div>
    </>
  );
};

export default App;
