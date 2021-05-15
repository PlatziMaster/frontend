import React from 'react';
import { mount } from 'enzyme';
import Experience from '../../components/Experience';

describe('<Experience />', () => {

  const exp = [
    {
      'company': 'Freelance',
      'endDate': 'Jun 2020',
      'jobDescription': 'I made a website using Nuxtjs for a law firm in Veracruz, Mex.',
      'jobTitle': 'Frontend',
      'startDate': 'Mar 2020',
    },
    {
      'company': 'Freelance',
      'endDate': 'Present',
      'jobDescription': 'Doing websites in frontendmentor, that can be used in different types of business.',
      'jobTitle': 'Frontend',
      'startDate': 'Sept 2019',
    },
    {
      'company': 'Freelance',
      'endDate': 'Present',
      'jobDescription': 'Doing websites in frontendmentor, that can be used in different types of business.',
      'jobTitle': 'Frontend',
      'startDate': 'Sept 2012',
    },
  ];

  const experience = mount(<Experience info={exp} />);

  test('Experience render', () => {
    expect(experience.length).toEqual(1);
  });

  test('Experience title', () => {
    expect(experience.find('.Experience-title').length).toEqual(1);
  });

  test('Experience haves 3 items', () => {
    expect(experience.find('.Experience-item').length).toBeGreaterThan(2);
  });

});
