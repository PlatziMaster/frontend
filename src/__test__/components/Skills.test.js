import React from 'react';
import { mount } from 'enzyme';
import Skills from '../../components/Skills';

describe('<Skills />', () => {
  const skills = mount(
    <Skills
      title='Skills'
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
      ]}
    />,
  );

  test('Skills render', () => {
    expect(skills.length).toEqual(1);
  });

  test('Skills title', () => {
    expect(skills.find('.skills-title').length).toEqual(1);
  });

  test('Skills has 3 items', () => {
    expect(skills.find('.skills-item').length).toBeGreaterThan(2);
  });

});
