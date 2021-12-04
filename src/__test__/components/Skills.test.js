import React from 'react';
import { mount } from 'enzyme';
import Skills from '../../components/Skills';
import getData from '../../utils/getData';

const data = getData('http://localhost:3000');

describe('<Skills />', () => {
  const skills = mount(<Skills data={data.skills} />);

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
