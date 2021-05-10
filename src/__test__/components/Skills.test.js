import React from 'react';
import { mount } from 'enzyme';
import Skills from '../../components/Skills';

import data from '../../../data.json';

describe('<Skills />', () => {
  const skills = mount(<Skills />);

  test('Skills render', () => {
    expect(skills.length).toEqual(1);
  });

  test('Skills title', () => {
    expect(skills.find('.Skills-title').length).toEqual(1);
  });

  test('Skills has 3 items', () => {
    expect(data.data.skills.length).toBeGreaterThan(2);
  });

});
