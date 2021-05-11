import React from 'react';
import { mount } from 'enzyme';
import Experience from '../../components/Experience';

const dataExample = [
  {
    'company': 'Casa editorial el Tiempo',
    'endDate': 'Present',
    'jobDescription': 'Layout and Development of web applications in next.js and react.js',
    'jobTitle': 'Developer Frontend',
    'startDate': 'May 2020',
  },
  {
    'company': 'Kitfood',
    'endDate': 'Jan 2020',
    'jobDescription': 'Application that connects housewives with people who like to eat homemade, developed in react.js',
    'jobTitle': 'Developer Frontend Jr.',
    'startDate': 'Apr 2019',
  },
  {
    'company': 'Foundard',
    'endDate': 'Aug 2021',
    'jobDescription': 'Designer and Front-end Developer of applications in the legal sector at vue.js',
    'jobTitle': 'Developer Frontend Jr.',
    'startDate': 'Feb 2019',
  },
  {
    'company': 'iPalmera',
    'endDate': 'Jan 2019',
    'jobDescription': 'Design of proposals for websites, website development, creation of 100% responsive sites from scratch, handling of HTML5, CSS3, WORDPRESS and PRESTASHOP. Adaptation of the design to the website. Use of frameworks such as bootstrap, foundation and materialize.css for the construction of sites.',
    'jobTitle': 'Web Designer',
    'startDate': 'Apr 2017',
  },
  {
    'company': 'EGO Grupo creativo',
    'endDate': 'Mar 2017',
    'jobDescription': 'Design, layout and development of functional and non-functional web proposals, experience in html5 and css3 programming through the construction of responsive pages from scratch. UI, UX design for mobile application interfaces and web applications. ',
    'jobTitle': 'Web Designer',
    'startDate': 'Jan 2016',
  },
];

describe('<Experience />', () => {
  const experience = mount(<Experience experience={dataExample} />);

  test('Experience render', () => {
    expect(experience.length).toEqual(1);
  });

  test('Experience title', () => {
    expect(experience.find('.Title').length).toEqual(1);
  });

  test('Experience haves 5 items', () => {
    expect(experience.find('.Experience-item').length).toBeGreaterThan(2);
  });

});
