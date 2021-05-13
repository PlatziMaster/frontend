import React from 'react';
import { mount } from 'enzyme';
import Skills from '../../components/Skills';

describe('<Skills />', () => {
  const skills = mount(
    <Skills
      skills={[
        {
          'name': 'JavaScript',
          'percentage': '75%',
        },
        {
          'name': 'HTML',
          'percentage': '75%',
        },
        {
          'name': 'CSS',
          'percentage': '75%',
        },
        {
          'name': 'Git',
          'percentage': '50%',
        },
        {
          'name': 'Stylus',
          'percentage': '50%',
        },
        {
          'name': 'ReactJS',
          'percentage': '75%',
        },
        {
          'name': 'Webpack',
          'percentage': '50%',
        },
        {
          'name': 'NodeJS',
          'percentage': '50%',
        },
        {
          'name': 'Figma',
          'percentage': '25%',
        },
      ]}
    />,
  );

  test('Skills render', () => {
    expect(skills.length).toEqual(1);
  });

  test('Skills title', () => {
    expect(skills.find('.Skills-title').length).toEqual(1);
  });

  test('Skills has 3 items', () => {
    expect(skills.find('.Skills-item').length).toBeGreaterThan(2);
  });

});
