// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './containers/App';

// ReactDOM.render(<App />, document.getElementById('app'));


import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import AcademicSkills from './components/Academic_Skills';
import InterestLanguages from './components/Interest_Languages';

const containerHeader = document.getElementById('Header');
ReactDOM.render(<Header />,containerHeader);

const containerProfile = document.getElementById('Profile');
ReactDOM.render(<Profile />,containerProfile);

const containerExperience = document.getElementById('Experience');
ReactDOM.render(<Experience />,containerExperience);

const containerAcademicskills = document.getElementById('Academic_Skills');
ReactDOM.render(<AcademicSkills />,containerAcademicskills);

const containerInterestlanguages = document.getElementById('Interest_Languages');
ReactDOM.render(<InterestLanguages />,containerInterestlanguages);


