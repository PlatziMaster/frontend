import React from 'react';
import { mount } from 'enzyme';
import Skills from '../../components/Skills';

describe('<Skills />', () => {
  const skills = mount(<Skills />);

  test('Skills render', () => {
    expect(skills.length).toEqual(1);
  });

  test('Skills title', () => {
    expect(skills.find('.Skills-title').length).toEqual(1);
  });

  test('Skills has skill container', () => {
    expect(skills.find('.Skills-itemContainer').length).toEqual(1);
  });

 
});

