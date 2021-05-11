import React from 'react';
import { mount } from 'enzyme';
import Skills from '../../components/Skills';

const data = [
  {
    'name': 'HTML5',
    'percentage': '85%',
  },
  {
    'name': 'CSS',
    'percentage': '25%',
  },
  {
    'name': 'JavaScript',
    'percentage': '55%',
  },
  {
    'name': 'React',
    'percentage': '90%',
  },
  {
    'name': 'Redux',
    'percentage': '70%',
  },
  {
    'name': 'Styled components',
    'percentage': '80%',
  },
  {
    'name': 'SASS',
    'percentage': '70%',
  },
  {
    'name': 'Figma',
    'percentage': '80%',
  },
  {
    'name': 'Adobe XD',
    'percentage': '80%',
  },
];

describe('<Skills />', () => {
  const skills = mount(<Skills skills={data} />);

  test('Skills render', () => {
    expect(skills.length).toEqual(1);
  });

  test('Skills title', () => {
    expect(skills.find('.Title').length).toEqual(1);
  });

  test('Skills has 3 items', () => {
    expect(skills.find('.Skills-item').length).toBeGreaterThan(2);
  });

});
