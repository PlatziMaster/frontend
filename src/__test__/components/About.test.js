import React from 'react';
import { mount } from 'enzyme';
import About from '../../components/About';

describe('<About />', () => {

  const info = [
    {
      'date': 'Mar 2020',
      'description': 'I completed the front end developer course to achieve new acknowledgment in CSS and HTML',
      'institution': 'Platzi',
      'name': 'FrontEnd Developer',
      'profile': 'https://platzi.com/p/AlexCode/',
    },
    {
      'date': 'Ago 2020',
      'description': 'I completed the vuejs course to understand javascript and vue better.',
      'institution': 'Platzi',
      'name': 'Vuejs 2 course',
      'profile': 'https://platzi.com/p/AlexCode/',
    },
    {
      'date': 'Present',
      'description': 'In my frontendmentor profile I made some webpages',
      'institution': 'FrontendMentor',
      'name': 'Websites',
      'profile': 'https://www.frontendmentor.io/profile/AlexLMCode',
    },
  ];

  const about = mount(<About info={info} />);

  test('About render', () => {
    expect(about.length).toEqual(1);
  });

  test('About title', () => {
    expect(about.find('.About-title').length).toEqual(1);
  });

  test('About haves 3 items', () => {
    expect(about.find('.About-item').length).toBeGreaterThan(2);
  });

});
