import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

const initialState = {
  'name': 'Diana Florez Bravo',
  'profession': 'Ingeniera de Sistemas',
  'address': 'Pasto, Colombia.',
  'email': 'dianaflorezbravo@gmail.com',
  'website': 'https://ideartics.com',
  'phone': '3017546678',
  'avatar': 'https://arepa.s3.amazonaws.com/melissa.jpg',
  'profile': 'IT Engineer dedicated to the development and implementation of web applications and mobile. I have experience as webMaster, I developed web applications with YII framework, know php, javascript, html5, css3, as postgres database and MySql, I worked on developing mobile applications with Titanium appcelerator. I developed a component of e-commerce for a clothing store that dynamically updates its inventory. ',
  'certificate': [
    {
      'date': 'July 2018',
      'description': 'MongoDB Basics. a course of study offered by MongoDB, Inc.',
      'institution': 'MongoDB University',
      'name': 'MongoDB Basics',
    },
    {
      'date': 'March 2010',
      'description': 'English Pre-intermediate',
      'institution': 'Shafston',
      'name': 'English',
    },
  ],
  'academic': [
    {
      'degree': 'Ingenieria de Sistema',
      'description': 'The Systems Engineering Professional at Universidad Mariana focuses on the planning, analysis, design and development of software projects',
      'endDate': 'Jan 2007',
      'institution': 'UNIVERSIDAD MARIANA',
      'startDate': 'Jan 2001',
    },
  ],
  'experience': [
    {
      'id': '1',
      'company': 'ParqueSoft Pasto',
      'endDate': 'Feb 2018',
      'jobDescription': 'Software development mainly in php with Yii framework, relational and non-relational database model design',
      'jobTitle': 'Full Stack',
      'startDate': 'March 2007',
    },
    {
      'id': '2',
      'company': 'MTOnline',
      'endDate': 'Jun2 2013',
      'jobDescription': 'E-commerce component for a clothing store that updates its inventory dynamically. This system for the commercialization of clothing by means of online sales internationally. e-commerce component for a clothing store that updates your inventory dynamically.',
      'jobTitle': 'Full Stack',
      'startDate': 'Sept 2013',
    },
    {
      'id': '3',
      'company': 'Wiwo',
      'endDate': 'Nov 2016',
      'jobDescription': 'Tourist sites application developed in android studio and backend in php with Yii',
      'jobTitle': 'Full Stack',
      'startDate': 'Dic 2016',
    },
  ],
  'skills': [
    {
      'name': 'HTML5',
      'percentage': '85%',
    },
    {
      'name': 'CSS',
      'percentage': '50%',
    },
    {
      'name': 'JavaScript',
      'percentage': '55%',
    },
    {
      'name': 'React',
      'percentage': '30%',
    },
    {
      'name': 'PHP',
      'percentage': '70%',
    },
    {
      'name': 'Postgres',
      'percentage': '70%',
    },
    {
      'name': 'MySql',
      'percentage': '70%',
    },
    {
      'name': 'MongoDB',
      'percentage': '50%',
    },
    {
      'name': 'Android',
      'percentage': '50%',
    },
  ],
  'interest': [
    'javascript',
    'develop',
    'backend',
    'frontend',
    'english',
    'french',
  ],
  'languages': [
    {
      'name': 'Spanish',
      'percentage': '90%',
    },
    {
      'name': 'English',
      'percentage': '60%',
    },
    {
      'name': 'French',
      'percentage': '30%',
    },
  ],
  'social': [
    {
      'name': 'facebook',
      'url': 'https://www.facebook.com/DianaCrysFlorezBrav',
    },
    {
      'name': 'twitter',
      'url': 'https://twitter.com/DianaCrysFlorez',
    },
    {
      'name': 'github',
      'url': 'https://github.com/dianaflorez',
    },
    {
      'name': 'linkedin',
      'url': 'https://www.linkedin.com/in/diana-florez-bravo-8411004b//',
    },
  ],
};

ReactDOM.render(<App initialState={initialState} />, document.getElementById('app'));
